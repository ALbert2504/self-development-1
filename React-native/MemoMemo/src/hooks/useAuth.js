import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';


const useAuth = (isAppInitialized) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isAppInitialized) {
      return auth().onAuthStateChanged((user) => {
        setUser(user);
        setIsLoading(false);
      });
    }
  }, [isAppInitialized]);

  return { isLoading, user };
};

export default useAuth;
