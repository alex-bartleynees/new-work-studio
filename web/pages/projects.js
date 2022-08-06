import Head from "next/head";
import styled from "styled-components";
import groq from "groq";
import client from "../client-config";

import Menu from "../components/Menu/menu";
import ContactInformation from "../components/Contact-Information/contact-information";

import { MainContainer } from "./index";
import { HeadingPrimary, typeScale } from "../utilities/typography";
import ImageLinks from "../components/Image-Links/image-links";
import TitleLink from "../components/Title-Link/title-link";

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Heading = styled(HeadingPrimary)`
  font-size: ${typeScale.header4};
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  padding: 0;
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
        <TitleLink top={true} href="/"></TitleLink>
        <TopContainer>
          <Heading>recent projects</Heading>
          <Menu></Menu>
        </TopContainer>
        <ImageLinks
          archiveLink={true}
          data={projects}
          type="projects"
        ></ImageLinks>

        <ContactInformation></ContactInformation>
        <TitleLink href="/"></TitleLink>
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
