import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from './config';

export async function signUp(email: string, password: string) {
  let result = null,
    error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result.user.uid);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function logIn(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function logOut() {
  await signOut(auth);
}
