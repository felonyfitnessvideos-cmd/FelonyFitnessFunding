import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Link, useNavigate } from 'react-router-dom'; // NEW: Added useNavigate

function AnalyticsPage() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // NEW: Initialize useNavigate

  useEffect(() => {
    const fetchCampaignData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('email_campaigns')
        .select(`*, email_events(event_type)`)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching campaign data:', error);
      } else {
        const processedCampaigns = data.map(campaign => {
          const events = campaign.email_events;
          const opens = events.filter(e => e.event_type === 'email.opened').length;
          const clicks = events.filter(e => e.event_type === 'email.clicked').length;
          const delivered = events.filter(e => e.event_type === 'email.delivered').length;
          
          const openRate = delivered > 0 ? ((opens / delivered) * 100).toFixed(1) : 0;
          const clickRate = delivered > 0 ? ((clicks / delivered) * 100).toFixed(1) : 0;

          return { ...campaign, opens, clicks, delivered, openRate, clickRate };
        });
        setCampaigns(processedCampaigns);
      }
      setLoading(false);
    };

    fetchCampaignData();
  }, []);

  const handleDeleteCampaign = async (campaignId) => {
    const { error } = await supabase.from('email_campaigns').delete().eq('id', campaignId);
    if (error) {
      alert(`Error deleting campaign: ${error.message}`);
    } else {
      setCampaigns(currentCampaigns => currentCampaigns.filter(c => c.id !== campaignId));
    }
  };

  // NEW: Function to handle logging out
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  if (loading) {
    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', color: 'white' }}>
            <h1>Loading Analytics...</h1>
        </div>
    );
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ marginBottom: '1rem', borderBottom: '1px solid #4a5568', paddingBottom: '1rem' }}>
        <Link to="/admin" style={{ color: '#63b3ed', marginRight: '1rem' }}>Campaigns</Link>
        <Link to="/admin/analytics" style={{ fontWeight: 'bold', color: 'white' }}>Analytics</Link>
      </nav>
      
      {/* NEW: Wrapper for title and logout button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{color: 'white'}}>Campaign Analytics</h1>
        <button onClick={handleLogout} style={{ background: '#4a5568', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #4a5568' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>Subject</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Sent At</th>
            <th style={{ padding: '8px' }}>Recipients</th>
            <th style={{ padding: '8px' }}>Delivered</th>
            <th style={{ padding: '8px' }}>Opens</th>
            <th style={{ padding: '8px' }}>Open Rate</th>
            <th style={{ padding: '8px' }}>Clicks</th>
            <th style={{ padding: '8px' }}>Click Rate</th>
            <th style={{ padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map(campaign => (
            <tr key={campaign.id} style={{ borderBottom: '1px solid #4a5568' }}>
              <td style={{ padding: '8px' }}>{campaign.subject}</td>
              <td style={{ padding: '8px' }}>{new Date(campaign.created_at).toLocaleString()}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{campaign.recipients_count}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{campaign.delivered}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{campaign.opens}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{campaign.openRate}%</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{campaign.clicks}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{campaign.clickRate}%</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>
                <button 
                  onClick={() => handleDeleteCampaign(campaign.id)}
                  style={{ background: 'none', border: 'none', color: '#e53e3e', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnalyticsPage;