import styled from "styled-components";

import Menu from "../Menu/menu.js";
import ContactInformation from "../Contact-Information/contact-information";

import { MainContainer } from "../../pages/index";
import { HeadingPrimary, typeScale } from "../../utilities/typography.js";
import ImageLinks from "../Image-Links/image-links";
import TitleLink from "../Title-Link/title-link";

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Heading = styled(HeadingPrimary)`
  font-size: ${typeScale.header4};
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  padding: 0;
`;

export default function PageTemplate({ data, heading, type }) {
  return (
    <MainContainer>
      <TitleLink top={true} href="/"></TitleLink>
      <TopContainer>
        <Heading>{heading}</Heading>
        <Menu></Menu>
      </TopContainer>
      <ImageLinks data={data} type={type}></ImageLinks>

      <ContactInformation></ContactInformation>
      <TitleLink href="/"></TitleLink>
    </MainContainer>
  );
}
