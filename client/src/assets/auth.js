import { auth } from 'firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email, password) =>{
   return createUserWithEmailAndPassword(auth, email, password);
   
}

export const doSigninUserWithEmailAndPassword = async (email, password) =>{
   return createUserWithEmailAndPassword(auth, email, password);
   
}

export const doSigninUserWithGoogle = async () => {
   
}