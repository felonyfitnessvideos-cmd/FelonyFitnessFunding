import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [session, setSession] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserAuthorization = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      if (session) {
        // --- This is the new logic ---
        // 1. Define the required Tag ID
        const ADMIN_TAG_ID = 'c6395c07-a0a0-40fe-a80d-8f3617bdad41'; // <-- PASTE YOUR TAG ID HERE

        // 2. Check if the user is linked to that tag in the user_tags table
        const { data, error } = await supabase
          .from('user_tags')
          .select()
          .eq('user_id', session.user.id)
          .eq('tag_id', ADMIN_TAG_ID)
          .single(); // .single() returns one object or null

        if (error && error.code !== 'PGRST116') { // Ignore 'PGRST116' (not found) errors
          console.error("Error checking authorization:", error);
        }
        
        // 3. If a record is found (data is not null), the user is authorized
        if (data) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      }
      setLoading(false);
    };

    checkUserAuthorization();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkUserAuthorization();
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div style={{color: 'white'}}>Verifying access...</div>;
  }

  if (!session || !isAuthorized) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;