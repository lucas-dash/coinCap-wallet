import { User } from 'firebase/auth';
import { db } from './config';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export async function addUserData(id: string, data: UserCollection) {
  let error = null;
  try {
    await setDoc(doc(db, 'users', id), data, { merge: true });
  } catch (e) {
    error = e;
  }

  return { error };
}

export async function addTransaction(transaction: Transaction, id: User) {
  try {
    const userRef = doc(db, 'users', id.uid);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data() as UserCollection;

    const updatedTransactions = [...userData?.wallet.transactions, transaction];

    await updateDoc(userRef, {
      'wallet.transactions': updatedTransactions,
    });
  } catch (error) {
    console.log(error);
  }
}

// update
// delete
