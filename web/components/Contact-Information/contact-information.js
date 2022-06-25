import styled from "styled-components";

import { HeadingQuaternary } from "../../utilities/typography";

const ContactInformationContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 0.5rem;
  place-self: flex-start;
  margin-top: auto;
`;

const CallHeading = styled(HeadingQuaternary)`
  grid-row: 1 / 2;
`;

const EmailHeading = styled(HeadingQuaternary)`
  grid-row: 2 / 3;
`;

const VisitHeading = styled(HeadingQuaternary)`
  grid-row: 3 / 4;
`;

export default function ContactInformation() {
  return (
    <ContactInformationContainer>
      <CallHeading>call</CallHeading>
      <EmailHeading>email</EmailHeading>
      <VisitHeading>visit</VisitHeading>
      <HeadingQuaternary>021 846 333</HeadingQuaternary>
      <HeadingQuaternary>
        <a href="mailto:tim@timneesarchitect.com">tim@timneesarchitect.com</a>
      </HeadingQuaternary>
      <HeadingQuaternary>
        139 Taylor's Mistake Road, Otauhai, Aotearoa
      </HeadingQuaternary>
    </ContactInformationContainer>
  );
}
