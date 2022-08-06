import Link from "next/link";
import styled from "styled-components";
import { urlFor } from "../../utilities/image-url";

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

const ImageWrapper = styled.div`
  cursor: pointer;
  position: relative;
  max-width: 40rem;

  &:hover .image-info {
    opacity: 1;
  }

  &:hover:after {
    content: "";
    position: absolute;
    height: 99.5%;
    width: 100%;
    top: 0;
    left: 0;
    transition: all 0.5s;
    background: rgba(0, 0, 0, 0.3);
  }

  @media (hover: none) {
    &:after {
      content: "";
      position: absolute;
      height: 99.5%;
      width: 100%;
      top: 0;
      left: 0;
      transition: all 0.5s;
      background: rgba(0, 0, 0, 0.3);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  backface-visibility: hidden;

  &:hover {
    opacity: 0.5;
  }
`;

const ImageInfo = styled.div.attrs({
  className: "image-info",
})`
  opacity: 0;
  transition: opacity 0.5s ease;
  position: absolute;
  color: #fff;
  top: 1rem;
  left: 1rem;
  font-size: 1.25rem;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 90%;

  @media (hover: none) {
    opacity: 1;
    height: 95%;
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
              ? index !== item.length - 1
                ? `/${type}/${item.slug.current}`
                : `/${type}/archive`
              : `/${type}/${item.slug.current}`
          }
        >
          <ImageWrapper>
            <Image
              src={urlFor(item.images[0]).width(800).height(800).url()}
              alt={item.images[0].alt}
            />
            {archiveLink ? (
              index !== item.length - 1 ? (
                <ImageInfo>
                  <p>{item.title}</p>
                  <p>View Project</p>
                </ImageInfo>
              ) : (
                <ImageInfo>
                  <p>&nbsp;</p>
                  <p>View Archive</p>
                </ImageInfo>
              )
            ) : (
              <ImageInfo>
                <p>{item.title}</p>
                <p>View Page</p>
              </ImageInfo>
            )}
          </ImageWrapper>
        </Link>
      ))}
    </ImageContainer>
  );
}
