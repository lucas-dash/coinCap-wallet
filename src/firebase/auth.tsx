import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  User,
} from 'firebase/auth';
import { auth, googleProvider } from './config';

export async function signUp(email: string, password: string) {
  let result = null,
    error = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signInWithGoogle() {
  let result = null,
    error = null;

  try {
    result = await signInWithPopup(auth, googleProvider);
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

export async function deleteUserAccount(user: User) {
  let error = null;
  try {
    await deleteUser(user);
  } catch (e) {
    error = e;
  }
  return { error };
}

export async function updateUserPassword() {}

export function verificationEmail() {}
