import Head from "next/head";
import styled from "styled-components";

import Menu from "../components/Menu/menu";
import ContactInformation from "../components/Contact-Information/contact-information";

import { MainContainer } from "./index";
import { HeadingPrimary, typeScale } from "../utilities/typography";

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

export default function Projects() {
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
        <ContactInformation></ContactInformation>
      </MainContainer>
    </>
  );
}
