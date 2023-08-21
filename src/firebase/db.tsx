import { db } from './config';
import { doc, setDoc } from 'firebase/firestore';

export async function addUserData(id: string, data: UserCollection) {
  let error = null;
  try {
    await setDoc(doc(db, 'users', id), data, { merge: true });
  } catch (e) {
    error = e;
  }

  return { error };
}

// update
// delete
