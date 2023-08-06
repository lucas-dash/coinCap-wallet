'use client';

import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext({});

// export const useAuthContext = () => useContext(AuthContext);

type AuthContextProviderProps = {
  children: ReactNode;
};

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (credential) => {
      if (credential) {
        console.log(credential);
        setUser(credential);
        router.push('/dashboard');
        setLoading(false);
      } else {
        setUser(null);
        router.push('/sign-up');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <div className="flex items-center justify-center text-4xl font-bold">
          Loading...
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
