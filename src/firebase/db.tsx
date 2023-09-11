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

export async function updateTransaction(id: string, update: Transaction) {
  let error = null;
  try {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);
      const userData = userDoc.data() as UserCollection;

      const searchTransaction = userData?.wallet.transactions.findIndex(
        (transaction) => transaction.id === id
      );

      if (searchTransaction !== -1) {
        userData.wallet.transactions[searchTransaction] = {
          ...userData.wallet.transactions[searchTransaction],
          ...update,
        };

        await updateDoc(userRef, {
          wallet: userData.wallet,
        });
      } else {
        error = `Transaction with ID ${id} not found.`;
      }
    }
  } catch (e) {
    console.log(e);
    error = e;
  }
  return { error };
}

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

export async function addToWatchlist(coin: WatchlistData) {
  let error = null;
  try {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);
      const userData = userDoc.data() as UserCollection;

      const updatedWatchlist = [...userData?.watchlist, coin];

      await updateDoc(userRef, {
        watchlist: updatedWatchlist,
      });
    }
  } catch (e) {
    console.log(e);
    error = e;
  }
}

export async function deleteFromWatchlist(uuid: string) {
  try {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);
      const userData = userDoc.data() as UserCollection;

      const updatedWatchlist = userData?.watchlist.filter(
        (coin) => coin.uuid !== uuid
      );

      await updateDoc(userRef, {
        watchlist: updatedWatchlist,
      });
    }
  } catch (e) {
    console.log(e);
  }
}
