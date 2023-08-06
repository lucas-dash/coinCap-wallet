import { db } from './config';
import { doc, setDoc } from 'firebase/firestore';

export async function addUserData(id: string, data: unknown) {
  let res = null,
    error = null;
  try {
    res = await setDoc(doc(db, 'users', id), data);
  } catch (e) {
    error = e;
  }

  return { res, error };
}
