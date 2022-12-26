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
  margin-block-end: 0.5rem;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  text-decoration-color: #330f0a;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #330f0a;
  }
`;

export default function Menu({ active }) {
  return (
    <MenuContainer>
      <div>
        <HeadingQuaternary>menu</HeadingQuaternary>
      </div>
      <div>
        <Link href="/projects">
          <LinkHeading active={active === "projects" && true}>
            - projects
          </LinkHeading>
        </Link>
        <Link href="/process">
          <LinkHeading active={active === "process" && true}>
            - process
          </LinkHeading>
        </Link>
        <Link href="/reputation">
          <LinkHeading active={active === "reputation" && true}>
            - reputation
          </LinkHeading>
        </Link>
        <Link href="/projects/archive">
          <LinkHeading active={active === "archive" && true}>
            - archive
          </LinkHeading>
        </Link>
      </div>
    </MenuContainer>
  );
}
