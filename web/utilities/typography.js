import styled from "styled-components";

export const primaryFont = `"Inter", sans-serif`;

export const typeScale = {
  header1: "4.209rem",
  header2: "3.157rem",
  header3: "2.369rem",
  header4: "1.777rem",
  header5: "1.333rem",
  paragraph: "1.2rem",
};

export const HeadingPrimary = styled.h1`
  font-size: ${typeScale.header1};
  font-weight: 600;
  line-height: 1.2;
  color: #000000;
`;

export const HeadingSecondary = styled.h2`
  font-size: ${typeScale.header2};
  font-weight: 500;
  line-height: 1.2;
  color: #000000;
`;

export const HeadingTertiary = styled.h3`
  font-size: ${typeScale.header3};
  font-weight: 400;
  line-height: 1.2;
  color: #000000;
`;

export const HeadingQuaternary = styled.h4`
  font-size: ${typeScale.header4};
  font-weight: 400;
  line-height: 1.2;
  color: #000000;
`;

export const HeadingQuinary = styled.h5`
  font-size: ${typeScale.header5};
  font-weight: 400;
  line-height: 1.2;
  color: #000000;
`;
export const Paragraph = styled.p`
  font-size: ${typeScale.paragraph};
  font-weight: 400;
  line-height: 1.2;
  color: #000000;
`;
