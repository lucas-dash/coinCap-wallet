'use client';

import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { createContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import LoadBall from '@/components/ui/LoadBall';
import { useToast } from '@/components/ui/use-toast';

export const AuthContext = createContext<User | undefined>(undefined);

type AuthContextProviderProps = {
  children: ReactNode;
};

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (credential) => {
        if (credential) {
          console.log(credential);
          setUser(credential);
          setLoading(false);
        } else {
          setUser(undefined);
          toast({
            title: 'You must be logged in.',
            variant: 'destructive',
          });
          router.push('/login');
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return () => unsubscribe();
  }, [router, toast]);

  return (
    <AuthContext.Provider value={user}>
      {loading ? <LoadBall /> : children}
    </AuthContext.Provider>
  );
}
