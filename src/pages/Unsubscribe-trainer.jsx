// src/pages/Unsubscribe-trainer.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function UnsubscribeTrainer() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('Processing your request...');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const email = searchParams.get('email');

  useEffect(() => {
    const handleUnsubscribe = async () => {
      if (!email) {
        setMessage('Error: No email address provided.');
        setIsSuccess(false);
        setIsLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke('unsubscribe-trainer-emails', {
          body: { email }
        });

        if (error) {
          throw error;
        }

        if (data.success) {
          setMessage('You have been successfully unsubscribed from trainer marketing emails.');
          setIsSuccess(true);
        } else {
          throw new Error(data.error || 'Failed to unsubscribe');
        }
      } catch (err) {
        console.error('Unsubscribe error:', err);
        setMessage(`An error occurred: ${err.message}`);
        setIsSuccess(false);
      } finally {
        setIsLoading(false);
      }
    };

    handleUnsubscribe();
  }, [email]);

  return (
    <div style={{ 
      padding: '3rem', 
      maxWidth: '600px', 
      margin: '4rem auto', 
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: '#1a202c',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ 
        marginBottom: '1.5rem',
        color: '#f7fafc',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Unsubscribe from Trainer Emails
      </h1>
      
      {isLoading ? (
        <div style={{ padding: '2rem' }}>
          <div style={{
            border: '4px solid #4a5568',
            borderTop: '4px solid #f97316',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : (
        <>
          <p style={{ 
            fontSize: '1.1rem', 
            color: isSuccess ? '#10b981' : '#f7fafc',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            {message}
          </p>
          
          {isSuccess && (
            <div style={{ 
              padding: '1.25rem', 
              background: '#064e3b', 
              borderRadius: '8px',
              color: '#d1fae5',
              marginBottom: '1.5rem',
              border: '1px solid #10b981'
            }}>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                <strong>Note:</strong> You will still receive important transactional emails from your trainer, such as workout updates, session reminders, and account notifications.
              </p>
            </div>
          )}
          
          {!isSuccess && email && (
            <div style={{ 
              padding: '1.25rem', 
              background: '#7f1d1d', 
              borderRadius: '8px',
              color: '#fecaca',
              marginBottom: '1.5rem',
              border: '1px solid #dc2626'
            }}>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                If you continue to have issues, please contact support@felony.fitness with your email address.
              </p>
            </div>
          )}
          
          <a href="https://www.felony.fitness" style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.875rem 2rem',
            background: '#f97316',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'background 0.2s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.target.style.background = '#ea580c'}
          onMouseOut={(e) => e.target.style.background = '#f97316'}
          >
            Return to Felony Fitness
          </a>
        </>
      )}
    </div>
  );
}

export default UnsubscribeTrainer;