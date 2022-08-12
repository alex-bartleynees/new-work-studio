import Head from "next/head";
import groq from "groq";
import client from "../client-config";

import PageTemplate from "../components/Page-Template/page-template";

export default function Process({ process }) {
  return (
    <>
      <Head>
        <title>Process | Tim Nees Architects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTemplate
        heading="process"
        type="process"
        data={process}
        active="process"
      ></PageTemplate>
    </>
  );
}

export async function getStaticProps() {
  const process = await client.fetch(groq`*[_type == "process"]`);
  return {
    props: {
      process,
    },
  };
}
