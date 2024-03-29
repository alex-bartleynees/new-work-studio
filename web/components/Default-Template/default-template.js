import styled from "styled-components";

import Carousel from "../Carousel/carousel";
import TitleLink from "../Title-Link/title-link";

import { MainContainer } from "../../pages/index";
import { TopContainer, Heading } from "../Page-Template/page-template";
import { Paragraph } from "../../utilities/typography";

const DescriptionText = styled.div`
  width: 50%;
  place-self: flex-start;
  margin-top: 1rem;

  @media (max-width: 600px) {
    left: 3rem;
    width: 100%;
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
        <Paragraph>{data?.description}</Paragraph>
      </DescriptionText>
      <Carousel slides={data?.images}></Carousel>
      <TitleLink href="/"></TitleLink>
    </MainContainer>
  );
}
