// Import the necessary module from Next.js
import Head from 'next/head'
import { TipLink } from "@tiplink/api"
import { useState, useEffect } from "react";

// Define a functional component for the main page
export default function Home() {
  const [tipLink, setTipLink] = useState<TipLink | undefined>(undefined);
  useEffect(() => {
    async function fetchTipLink() {
      const tipLink = await TipLink.create();
      setTipLink(tipLink);
    }
    fetchTipLink();
  }, [])
  return (
    <div>
      <Head>
        <title>Simple Next.js Page</title>
        <meta name="description" content="A simple Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <p>{tipLink ? tipLink.url.toString() : "undefined"}</p>
        <p>{tipLink ? tipLink.keypair?.publicKey.toBase58() : "undefined"}</p>
      </main>
    </div>
  )
}

