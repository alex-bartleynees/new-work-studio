import Link from "next/link";
import styled from "styled-components";
import ImageWrapper from "../Image-Wrapper/image-wrapper";

const ImageContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: center;
  margin-top: ${(props) => (props.archiveLink ? "10rem" : "5rem")};
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 1000px) {
    margin-block: 5rem;
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }
`;

export default function ImageLinks({ data, type, archiveLink }) {
  return (
    <ImageContainer archiveLink={archiveLink}>
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
