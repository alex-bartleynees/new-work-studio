import styled from "styled-components";

export const primaryFont = `"Inter", sans-serif`;

export const typeScale = {
  header1: "5.653rem",
  header2: "3.998rem",
  header3: "2.827rem",
  header4: "1.999rem",
  header5: "1.414rem",
  paragraph: "1rem",
};

export const HeadingPrimary = styled.h1`
  font-size: ${typeScale.header1};
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  position: relative;
  z-index: 1;
`;

export const HeadingSecondary = styled.h2`
  font-size: ${typeScale.header2};
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
`;
