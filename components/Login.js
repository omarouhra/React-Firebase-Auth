import { useRef } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "@firebase/auth";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(userCredential => {
        // signed in
        alert("you signIn");
      })
      .catch(error => {
        //error

        alert(error.message);
      });
  };

  const register = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(userCredential => {
        // signed in
        alert("you signUp succeefully");
      })
      .catch(error => {
        //error

        alert(error.message);
      });
  };

  const reset = () => {
    sendPasswordResetEmail(auth, emailRef.current.value);
    alert(
      `check you inbox ${emailRef.current.value} for a possword reset email`
    );
  };

  return (
    <form className='flex flex-col space-y-3 items-center justify-center h-screen'>
      <input
        className='px-3 py-4 border rounded-md'
        type='text'
        placeholder='email'
        ref={emailRef}
      />

      <input
        className='px-3 py-4 border rounded-md'
        type='text'
        placeholder='password'
        ref={passwordRef}
      />
      <button onClick={signIn} type='submit'>
        Sign In
      </button>
      <button onClick={register}>Register a new account</button>
      <button onClick={reset}>forgot my password</button>
    </form>
  );
}

export default Login;
