import { useNavigationContainerRef, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function Index() {
  const router = useRouter();
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/login');
    }, 100); 

    return () => clearTimeout(timeout);
  }, []);

  return <View />; 
}
