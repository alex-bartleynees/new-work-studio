import Link from "next/link";
import styled from "styled-components";
import ImageWrapper from "../Image-Wrapper/image-wrapper";

const ImageContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-block: 5rem;
  }
`;

export default function ImageLinks({ data, type, archiveLink }) {
  return (
    <ImageContainer>
      {data?.map((item, index) => (
        <Link
          key={item._id}
          href={
            archiveLink
              ? index !== data.length - 1
                ? `/${type}/${item.slug.current}`
                : `/${type}/archive`
              : `/${type}/${item.slug.current}`
          }
        >
          <a>
            <ImageWrapper
              image={item}
              archiveLink={archiveLink}
              data={data}
              index={index}
            ></ImageWrapper>
          </a>
        </Link>
      ))}
    </ImageContainer>
  );
}
