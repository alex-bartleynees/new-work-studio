import Head from "next/head";
import styled from "styled-components";

import Menu from "../components/Menu/menu";
import ContactInformation from "../components/Contact-Information/contact-information";
import HeadingMain from "../components/Heading-Main/heading-main";

export const MainContainer = styled.main`
  min-height: calc(100vh - var(--header-height, 20rem));
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    --header-height: 6rem;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>New Work Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Menu></Menu>
        <HeadingMain></HeadingMain>
        <ContactInformation></ContactInformation>
      </MainContainer>
    </>
  );
}
