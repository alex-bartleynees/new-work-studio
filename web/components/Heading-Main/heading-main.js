import styled from "styled-components";

import { HeadingPrimary, HeadingSecondary } from "../../utilities/typography";

const HeadingContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const ItalicHeading = styled(HeadingSecondary)`
  font-style: italic;
`;

export default function HeadingMain() {
  return (
    <HeadingContainer>
      <HeadingPrimary>new work studio / tim nees architects</HeadingPrimary>
      <ItalicHeading>"beyond beautiful"</ItalicHeading>
    </HeadingContainer>
  );
}
