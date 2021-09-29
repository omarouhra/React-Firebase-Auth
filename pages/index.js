import { signOut } from "@firebase/auth";
import Head from "next/head";
import { auth } from "../firebase";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Tailwind UI</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Let's build a Sign in page with Tailwind UI</h1>
      <button onClick={() => signOut(auth)}>log out</button>
    </div>
  );
}
