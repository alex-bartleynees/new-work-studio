import Head from "next/head";
import groq from "groq";
import client from "../../client-config";
import Link from "next/link";
import styled from "styled-components";

import ImageWrapper from "../../components/Image-Wrapper/image-wrapper";
import { Heading } from "../../components/Page-Template/page-template";
import TitleLink from "../../components/Title-Link/title-link";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
  width: 100%;
  place-items: center;
  margin-block: 10rem;
`;

const TitleLinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const NotFoundText = styled.p`
  margin-block: 2rem;
`;

export default function Archive({ data }) {
  return (
    <>
      <Head>
        <title>Tim Nees Architects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleLinkContainer>
        <TitleLink top={true} href="/"></TitleLink>
      </TitleLinkContainer>

      <Heading>archive</Heading>
      {data.length ? (
        <GridContainer>
          {data?.map((item) => (
            <Link key={item._id} href={`/projects/${item.slug.current}`}>
              <a>
                <ImageWrapper
                  image={item}
                  linkText="View Project"
                ></ImageWrapper>
              </a>
            </Link>
          ))}
        </GridContainer>
      ) : (
        <NotFoundText>No projects in archive</NotFoundText>
      )}
    </>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(
    groq`*[_type == "projects" && archive] | order(_createdAt desc)`
  );
  return {
    props: {
      data,
    },
  };
}
