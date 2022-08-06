import Head from "next/head";
import groq from "groq";
import client from "../client-config";

import Menu from "../components/Menu/menu";
import ContactInformation from "../components/Contact-Information/contact-information";

import { MainContainer } from "./index";
import { Heading, TopContainer } from "./projects";
import ImageLinks from "../components/Image-Links/image-links";
import TitleLink from "../components/Title-Link/title-link";

export default function Process({ process }) {
  console.log(process);
  return (
    <>
      <Head>
        <title>New Work Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <TitleLink top={true} href="/"></TitleLink>
        <TopContainer>
          <Heading>process</Heading>
          <Menu></Menu>
        </TopContainer>
        <ImageLinks projects={process}></ImageLinks>

        <ContactInformation></ContactInformation>
        <TitleLink href="/"></TitleLink>
      </MainContainer>
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