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
        console.log("Checking authorization for user:", session.user.email);
        
        // TEMPORARY SIMPLE AUTHORIZATION: 
        // For now, let's just check if the user is authenticated
        // You can add your admin email here, or implement proper role-based auth later
        
        // Get admin emails from environment variable or use defaults
        const adminEmailsFromEnv = import.meta.env.VITE_ADMIN_EMAILS;
        const adminEmails = adminEmailsFromEnv 
          ? adminEmailsFromEnv.split(',').map(email => email.trim())
          : [
              'felonyfitnessvideos@gmail.com', // Default admin email - update this
              'admin@felonyfitness.com'
            ];
        
        if (adminEmails.includes(session.user.email)) {
          setIsAuthorized(true);
          console.log("User authorized via admin email list");
        } else {
          setIsAuthorized(false);
          console.log("User not authorized - email not in admin list");
        }
        
        // COMMENTED OUT THE PROBLEMATIC USER_TAGS CHECK
        // Once you fix your database, you can uncomment this:
        /*
        const ADMIN_TAG_ID = import.meta.env.VITE_ADMIN_TAG_ID || 'c6395c07-a0a0-40fe-a80d-8f3617bdad41';
        
        try {
          const { data, error } = await supabase
            .from('user_tags')
            .select('*')
            .eq('user_id', session.user.id)
            .eq('tag_id', ADMIN_TAG_ID)
            .maybeSingle();

          if (error) {
            console.error("Error checking authorization:", error);
            setIsAuthorized(false);
          } else {
            setIsAuthorized(!!data);
          }
        } catch (err) {
          console.error("Authorization check failed:", err);
          setIsAuthorized(false);
        }
        */
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