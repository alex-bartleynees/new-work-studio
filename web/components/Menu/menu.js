import Link from "next/link";
import styled from "styled-components";
import { HeadingQuaternary } from "../../utilities/typography";

const MenuContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  place-self: flex-end;
`;

const LinkHeading = styled(HeadingQuaternary)`
  cursor: pointer;
`;

export default function Menu() {
  return (
    <MenuContainer>
      <div>
        <HeadingQuaternary>menu</HeadingQuaternary>
      </div>
      <div>
        <Link href="/projects">
          <LinkHeading> - projects</LinkHeading>
        </Link>
        <Link href="/process">
          <LinkHeading> - process </LinkHeading>
        </Link>
        <Link href="/collaborators">
          <LinkHeading> - collaborators</LinkHeading>
        </Link>
        <Link href="/reputation">
          <LinkHeading> - reputation</LinkHeading>
        </Link>
      </div>
    </MenuContainer>
  );
}
