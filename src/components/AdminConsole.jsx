import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '../supabaseClient';
import { Editor } from '@tinymce/tinymce-react';
import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom'; // NEW: Added useNavigate

// --- (Styles are the same) ---
const customModalStyles = {
  content: {
    top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%',
    transform: 'translate(-50%, -50%)', width: '400px', background: '#2d3748',
    color: '#f7fafc', border: '1px solid #4a5568', zIndex: 1000,
  },
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 999 },
};

function AdminConsole() {
  const [users, setUsers] = useState([]);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ email: '', full_name: '', phone_number: '', address: '', tags: [] });
  const [availableTags, setAvailableTags] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [filterEmailsOnly, setFilterEmailsOnly] = useState(false);
  const [selectedCampaignTag, setSelectedCampaignTag] = useState('all');
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState('');

  const navigate = useNavigate(); // NEW: Initialize useNavigate

  const fetchData = useCallback(async () => {
    let usersQuery = supabase.from('users').select(`id, email, full_name, phone_number, address, tags!left(id, name)`).eq('is_unsubscribed', false);
    if (selectedCampaignTag !== 'all') {
      usersQuery = supabase.from('users').select(`id, email, full_name, phone_number, address, tags!inner(id)`).eq('tags.id', selectedCampaignTag).eq('is_unsubscribed', false);
    }
    const { data: usersData, error: usersError } = await usersQuery;
    if (usersError) console.error('Error fetching users:', usersError);
    else setUsers(usersData || []);
  }, [selectedCampaignTag]);

  const fetchStaticData = useCallback(async () => {
    const { data: tagsData, error: tagsError } = await supabase.from('tags').select('id, name');
    if (tagsError) console.error('Error fetching tags:', tagsError);
    else setAvailableTags(tagsData || []);

    const { data: templatesData, error: templatesError } = await supabase.from('email_templates').select('id, name, subject, body');
    if (templatesError) console.error('Error fetching templates:', templatesError);
    else setTemplates(templatesData || []);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);
  useEffect(() => { fetchStaticData(); }, [fetchStaticData]);

  const openModal = (user = null) => {
    if (user) {
      setEditingUser(user);
      setNewUser({
        email: user.email || '', full_name: user.full_name || '',
        phone_number: user.phone_number || '', address: user.address || '',
        tags: user.tags.map(t => t.id),
      });
    } else {
      setEditingUser(null);
      setNewUser({ email: '', full_name: '', phone_number: '', address: '', tags: [] });
    }
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
    setNewUser({ email: '', full_name: '', phone_number: '', address: '', tags: [] });
  };

  const openTemplateModal = () => setIsTemplateModalOpen(true);
  const closeTemplateModal = () => setIsTemplateModalOpen(false);

  const handleTemplateChange = (e) => {
    const templateId = e.target.value;
    setSelectedTemplate(templateId);
    if (templateId) {
      const template = templates.find(t => t.id === templateId);
      if (template) {
        setSubject(template.subject || '');
        setBody(template.body || '');
      }
    } else {
      setSubject('');
      setBody('');
    }
  };
  
  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleTagChange = (tagId) => {
    setNewUser(prevState => {
      const newTags = prevState.tags.includes(tagId) ? prevState.tags.filter(id => id !== tagId) : [...prevState.tags, tagId];
      return { ...prevState, tags: newTags };
    });
  };

  const handleSaveUser = async (e) => {
    e.preventDefault();
    const { tags, ...userData } = newUser;
    if (editingUser) {
      const { error } = await supabase.from('users').update(userData).eq('id', editingUser.id);
      if (error) return alert(`Error updating user: ${error.message}`);
      await supabase.from('user_tags').delete().eq('user_id', editingUser.id);
      if (tags.length > 0) {
        const userTagsData = tags.map(tagId => ({ user_id: editingUser.id, tag_id: tagId }));
        await supabase.from('user_tags').insert(userTagsData);
      }
    } else {
      const { data: insertedUser, error } = await supabase.from('users').insert(userData).select('id').single();
      if (error) return alert(`Error creating user: ${error.message}`);
      if (tags.length > 0) {
        const userTagsData = tags.map(tagId => ({ user_id: insertedUser.id, tag_id: tagId }));
        await supabase.from('user_tags').insert(userTagsData);
      }
    }
    closeModal();
    await fetchData();
  };

  const handleSaveAsTemplate = async (e) => {
    e.preventDefault();
    if (!newTemplateName || !subject || !body) {
      alert('Please provide a template name, subject, and body content.');
      return;
    }
    const { error } = await supabase.from('email_templates').insert({ name: newTemplateName, subject: subject, body: body });
    if (error) alert(`Error saving template: ${error.message}`);
    else {
      alert('Template saved successfully!');
      setNewTemplateName('');
      closeTemplateModal();
      await fetchStaticData();
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm(`Are you sure you want to delete this user?`)) return;
    const { error } = await supabase.from('users').delete().eq('id', userId);
    if (error) alert(`Error deleting user: ${error.message}`);
    else setUsers(currentUsers => currentUsers.filter(user => user.id !== userId));
  };

  const handleDeleteTemplate = async (templateId, templateName) => {
    if (window.confirm(`Are you sure you want to delete the "${templateName}" template?`)) {
      const { error } = await supabase.from('email_templates').delete().eq('id', templateId);
      if (error) {
        alert(`Error deleting template: ${error.message}`);
      } else {
        if (selectedTemplate === templateId) {
          setSelectedTemplate('');
          setSubject('');
          setBody('');
        }
        await fetchStaticData();
      }
    }
  };
  
  const filteredUsers = useMemo(() => {
    if (!filterEmailsOnly) return users;
    return users.filter(user => user.email && user.email.trim() !== '');
  }, [users, filterEmailsOnly]);

  const handleSendCampaign = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback('');
    const recipientEmails = filteredUsers.map(user => user.email).filter(Boolean);
    if (recipientEmails.length === 0) {
        setFeedback('There are no users with emails in this group.');
        setIsLoading(false);
        return;
    }
    const { data: newCampaign, error: campaignError } = await supabase.from('email_campaigns').insert({ subject, body, recipients_count: recipientEmails.length }).select('id').single();
    if (campaignError) {
      setFeedback(`Error saving campaign: ${campaignError.message}`);
      setIsLoading(false);
      return;
    }
    const campaignId = newCampaign.id;
    const { data, error } = await supabase.functions.invoke('send-email-campaign', {
      body: { subject, body, recipients: recipientEmails, headers: { 'X-Entity-ID': campaignId } },
    });
    if (error) setFeedback(`Error sending campaign: ${error.message || 'Function returned a non-2xx status code'}`);
    else {
      setFeedback(`Campaign sent successfully to ${recipientEmails.length} users!`);
    }
    setIsLoading(false);
  };

  // NEW: Function to handle logging out
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: 'auto' }}>
      {/* NEW: Wrapper div for title and logout button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Felony Fitness - Marketing Console</h1>
        <button onClick={handleLogout} style={{ background: '#4a5568', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>

      <nav style={{ margin: '1rem 0', borderBottom: '1px solid #4a5568', paddingBottom: '1rem' }}>
        <Link to="/admin" style={{ marginRight: '1rem', fontWeight: 'bold', color: 'white' }}>Campaigns</Link>
        <Link to="/admin/analytics" style={{ color: '#63b3ed' }}>Analytics</Link>
      </nav>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 2, position: 'relative', zIndex: 0 }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="template-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>New Campaign</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <select id="template-select" value={selectedTemplate} onChange={handleTemplateChange} style={{ flex: 1, padding: '10px', color: '#000', borderRadius: '5px 0 0 5px', borderRight: 'none' }}>
                <option value="">-- Start with a blank email --</option>
                {templates.map(template => (<option key={template.id} value={template.id}>{template.name}</option>))}
              </select>
              {selectedTemplate && (
                <button 
                  type="button" 
                  onClick={() => handleDeleteTemplate(selectedTemplate, templates.find(t=>t.id===selectedTemplate)?.name)}
                  style={{ padding: '10px', background: '#e53e3e', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 'bold', borderRadius: '0 5px 5px 0' }}
                  title="Delete selected template"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
          <form onSubmit={handleSendCampaign}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="tag-select" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Send To</label>
              <select id="tag-select" value={selectedCampaignTag} onChange={(e) => setSelectedCampaignTag(e.target.value)} style={{ width: '100%', padding: '10px', color: '#000' }}>
                <option value="all">All Users</option>
                {availableTags.map(tag => (<option key={tag.id} value={tag.id}>{tag.name}</option>))}
              </select>
            </div>
            <input type="text" placeholder="Email Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required style={{ width: '100%', padding: '10px', marginBottom: '1rem', boxSizing: 'border-box', color: '#000' }}/>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <button 
                type="submit" 
                disabled={isLoading || filteredUsers.length === 0} 
                style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#f97316', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}
              >
                {isLoading ? 'Sending...' : `Send to ${filteredUsers.length} Users`}
              </button>
              <button 
                type="button" 
                onClick={openTemplateModal} 
                style={{ padding: '10px 20px', cursor: 'pointer', background: '#4a5568', border: 'none', borderRadius: '5px', color: 'white' }}
              >
                Save as Template
              </button>
            </div>
            <Editor
              apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
              value={body}
              onEditorChange={(content, editor) => setBody(content)}
              init={{ height: 350, menubar: false, plugins: ['code', 'lists', 'link', 'image', 'wordcount'], toolbar: '| code | undo redo | blocks | bold italic | bullist numlist | link image ' }}
            />
          </form>
          {feedback && <p style={{ marginTop: '1rem' }}><b>{feedback}</b></p>}
        </div>
        <div style={{ flex: 1, border: '1px solid #4a5568', padding: '1rem', borderRadius: '8px' }}>
          <h3>Manage Users</h3>
          <button onClick={() => openModal()} style={{ width: '100%', padding: '10px', marginBottom: '1rem' }}>Add New User</button>
          <div style={{ marginBottom: '1rem' }}>
            <label><input type="checkbox" checked={filterEmailsOnly} onChange={(e) => setFilterEmailsOnly(e.target.checked)}/> Show only users with emails</label>
          </div>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <h4>User List ({filteredUsers.length})</h4>
            {filteredUsers.length > 0 ? (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {filteredUsers.map((user) => (
                  <li key={user.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }}>
                    <span>{user.full_name || user.email}</span>
                    <div>
                      <button onClick={() => openModal(user)} style={{background: 'none', border: 'none', color: '#63b3ed', cursor: 'pointer', marginRight: '10px'}}>Edit</button>
                      <button onClick={() => handleDeleteUser(user.id)} style={{ background: 'none', border: 'none', color: '#e53e3e', cursor: 'pointer', fontWeight: 'bold' }}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : <p>No users found.</p>}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customModalStyles} contentLabel="User Form">
        <h2>{editingUser ? 'Edit User' : 'Add New User'}</h2>
        <form onSubmit={handleSaveUser}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '4px' }}>Email</label>
            <input type="email" name="email" value={newUser.email} onChange={handleNewUserChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', background: '#4a5568', color: '#f7fafc', border: '1px solid #718096' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '4px' }}>Full Name</label>
            <input type="text" name="full_name" value={newUser.full_name} onChange={handleNewUserChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', background: '#4a5568', color: '#f7fafc', border: '1px solid #718096' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '4px' }}>Phone Number</label>
            <input type="tel" name="phone_number" value={newUser.phone_number} onChange={handleNewUserChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', background: '#4a5568', color: '#f7fafc', border: '1px solid #718096' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '4px' }}>Address</label>
            <input type="text" name="address" value={newUser.address} onChange={handleNewUserChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', background: '#4a5568', color: '#f7fafc', border: '1px solid #718096' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>Tags</label>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {availableTags.map(tag => (
                <label key={tag.id} style={{ marginBottom: '4px' }}>
                  <input type="checkbox" checked={newUser.tags.includes(tag.id)} onChange={() => handleTagChange(tag.id)} style={{ marginRight: '8px' }}/>
                  {tag.name}
                </label>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <button type="button" onClick={closeModal}>Cancel</button>
            <button type="submit">Save User</button>
          </div>
        </form>
      </Modal>
      <Modal isOpen={isTemplateModalOpen} onRequestClose={closeTemplateModal} style={customModalStyles} contentLabel="Save New Template">
        <h2>Save New Template</h2>
        <form onSubmit={handleSaveAsTemplate}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '4px' }}>Template Name</label>
            <input type="text" value={newTemplateName} onChange={(e) => setNewTemplateName(e.target.value)} required style={{ width: '100%', padding: '8px', boxSizing: 'border-box', background: '#4a5568', color: '#f7fafc', border: '1px solid #718096' }} />
          </div>
          <p style={{ fontSize: '0.9em', color: '#a0aec0' }}>The current subject and email body will be saved as the template content.</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
            <button type="button" onClick={closeTemplateModal}>Cancel</button>
            <button type="submit">Save Template</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AdminConsole;