import styled from "styled-components";

import { HeadingPrimary, HeadingSecondary } from "../../utilities/typography";

const HeadingContainer = styled.div`
 margin: auto;
 text-align: center;
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
