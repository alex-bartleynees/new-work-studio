import Head from "next/head";
import groq from "groq";
import client from "../../client-config";

import DefaultTemplate from "../../components/Default-Template/default-template";

export default function Project({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Tim Nees Architects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultTemplate data={data}></DefaultTemplate>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "reputation" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const data = await client.fetch(
    groq`*[_type == "reputation" && slug.current == "${slug}"]`
  );

  return {
    props: {
      data: data[0],
    },
  };
}
