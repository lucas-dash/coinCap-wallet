import { User } from 'firebase/auth';
import { auth, db } from './config';
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

export async function addTransaction(transaction: Transaction, user: User) {
  let error = null;
  try {
    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data() as UserCollection;

    const updatedTransactions = [...userData?.wallet.transactions, transaction];

    await updateDoc(userRef, {
      'wallet.transactions': updatedTransactions,
    });
  } catch (e) {
    console.log(e);
    error = e;
  }
  return { error };
}

// update
export async function updatedTransaction(id: string, user: User) {
  try {
    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data() as UserCollection;

    const updateTransaction = userData?.wallet.transactions.find(
      (transaction) => transaction.id === id
    );
  } catch (e) {
    console.log(e);
  }
}
// delete
export async function deleteTransaction(id: string) {
  try {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);
      const userData = userDoc.data() as UserCollection;

      const updatedTransactions = userData?.wallet.transactions.filter(
        (transaction) => transaction.id !== id
      );

      await updateDoc(userRef, {
        'wallet.transactions': updatedTransactions,
      });
    }
  } catch (e) {
    console.log(e);
  }
}
