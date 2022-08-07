import Head from "next/head";
import groq from "groq";
import client from "../client-config";

import PageTemplate from "../components/Page-Template/page-template";

export default function Reputation({ reputation }) {
  return (
    <>
      <Head>
        <title>New Work Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTemplate
        heading="reputation"
        type="reputation"
        data={reputation}
      ></PageTemplate>
    </>
  );
}

export async function getStaticProps() {
  const reputation = await client.fetch(
    groq`*[_type == "reputation"] | order(_createdAt asc)`
  );
  return {
    props: {
      reputation,
    },
  };
}
