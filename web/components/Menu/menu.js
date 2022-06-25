import styled from "styled-components";
import { HeadingQuaternary } from "../../utilities/typography";

const MenuContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  place-self: flex-end;
  margin: 10rem 20rem 10rem 10rem;
`;

export default function Menu() {
  return (
    <MenuContainer>
      <div>
        <HeadingQuaternary>menu</HeadingQuaternary>
      </div>
      <div>
        <HeadingQuaternary> - projects</HeadingQuaternary>
        <HeadingQuaternary> - process </HeadingQuaternary>
        <HeadingQuaternary> - collaborators</HeadingQuaternary>
        <HeadingQuaternary> - reputation</HeadingQuaternary>
      </div>
    </MenuContainer>
  );
}
