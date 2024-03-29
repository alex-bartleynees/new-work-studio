import Link from "next/link";
import styled, { css } from "styled-components";
import { HeadingQuinary } from "../../utilities/typography";

const Anchor = styled.a(
  (props) => css`
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    align-self: flex-end;

    @media (max-width: 1200px) {
      margin-bottom: 3rem;
    }

    @media (max-width: 1000px) {
      display: none;
    }

    ${props.top &&
    css`
      position: absolute;
      top: 5rem;
      margin-right: 1rem;

      @media (max-width: 1000px) {
        display: block;
      }

      @media (max-width: 600px) {
        position: static;
      }
    `}
  `
);

export default function TitleLink({ href, top }) {
  return (
    <Link href={href}>
      <Anchor top={top}>
        <HeadingQuinary>new work studio / tim nees architects</HeadingQuinary>
      </Anchor>
    </Link>
  );
}
