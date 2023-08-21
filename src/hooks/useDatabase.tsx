'use client';

import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebase/config';

export default function useDatabase() {
  const user = useAuthContext();

  const [data, setData] = useState<UserCollection | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      const unsub = onSnapshot(
        doc(db, 'users', user?.uid),
        (snapshot) => {
          if (snapshot.exists()) {
            const dbData = snapshot.data();
            setData(dbData as UserCollection);
            setLoading(false);
          } else {
            console.log('no data is there');
            setData(undefined);
            setError('Failed to read data!');
          }
        },
        (err) => {
          console.log(err.message);
          setError('Something went wrong.');
        }
      );

      return () => unsub();
    }
  }, [user]);

  return { data, loading, error };
}
