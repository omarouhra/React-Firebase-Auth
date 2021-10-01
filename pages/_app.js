import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Login from "../components/Login";
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Login />;
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
