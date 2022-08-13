import styled from "styled-components";

import Carousel from "../Carousel/carousel";
import TitleLink from "../Title-Link/title-link";

import { MainContainer } from "../../pages/index";
import { TopContainer, Heading } from "../Page-Template/page-template";

const DescriptionText = styled.div`
  width: 50%;
  place-self: flex-start;
  margin-top: 1rem;

  @media (max-width: 600px) {
    left: 3rem;
  }
`;

export default function DefaultTemplate({ data }) {
  return (
    <MainContainer>
      <TitleLink top={true} href="/"></TitleLink>
      <TopContainer>
        <Heading>{data?.title}</Heading>
      </TopContainer>
      <DescriptionText>
        <p>{data?.description}</p>
      </DescriptionText>
      <Carousel slides={data?.images}></Carousel>
      <TitleLink href="/"></TitleLink>
    </MainContainer>
  );
}
