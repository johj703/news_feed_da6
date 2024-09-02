import { createContext, useEffect, useState } from 'react';
import { supabase } from '../supabase/supabase';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const response = await supabase.auth.getSession();
      setUser(response.data.session.user);
    };
    getSession();

    // 유저의 권한이 바뀌었을 때
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ? session?.user : null);
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
