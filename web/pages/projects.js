import Head from "next/head";
import styled from "styled-components";
import groq from "groq";
import client from "../client-config";

import Menu from "../components/Menu/menu";
import ContactInformation from "../components/Contact-Information/contact-information";

import { MainContainer } from "./index";
import { HeadingPrimary, typeScale } from "../utilities/typography";
import ImageLinks from "../components/Image-Links/image-links";

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Heading = styled(HeadingPrimary)`
  font-size: ${typeScale.header4};
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
`;

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>New Work Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <TopContainer>
          <Heading>recent projects</Heading>
          <Menu></Menu>
        </TopContainer>
        <ImageLinks projects={projects}></ImageLinks>
        <ContactInformation></ContactInformation>
      </MainContainer>
    </>
  );
}

export async function getStaticProps() {
  const projects = await client.fetch(
    groq`*[_type == "projects" && !archive][0..5]  | order(_createdAt desc)`
  );
  return {
    props: {
      projects,
    },
  };
}
