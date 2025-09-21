// src/pages/UnsubscribePage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('Processing your request...');
  const userEmail = searchParams.get('email');

  useEffect(() => {
    const handleUnsubscribe = async () => {
      if (!userEmail) {
        setMessage('Error: No email address provided.');
        return;
      }

      const { error } = await supabase.functions.invoke('handle-unsubscribe', {
        body: { email: userEmail },
      });

      if (error) {
        setMessage(`An error occurred: ${error.message}`);
      } else {
        setMessage('You have been successfully unsubscribed from all future marketing emails.');
      }
    };

    handleUnsubscribe();
  }, [userEmail]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', color: 'white', textAlign: 'center' }}>
      <h1>Unsubscribe</h1>
      <p style={{ fontSize: '1.2em' }}>{message}</p>
    </div>
  );
}

export default UnsubscribePage;