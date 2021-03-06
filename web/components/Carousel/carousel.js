import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";

import { PrevButton, NextButton } from "./carousel-buttons";
import { urlFor } from "../../utilities/image-url";

const Container = styled.div`
  position: relative;
  max-width: 1000px;
  margin: auto;
`;

const ContainerViewPort = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarouselContainer = styled.div`
  display: flex;
`;

const CarouselSlide = styled.div`
  position: relative;
  min-width: 100%;
`;

const CarouselSlideInner = styled.div`
  position: relative;
  overflow: hidden;
  height: 60rem;

  @media (max-width: 600px) {
    height: 35rem;
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Carousel({ slides }) {
  console.log("slides", slides);
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <Container>
        <ContainerViewPort ref={viewportRef}>
          <CarouselContainer>
            {slides.map((slide) => (
              <CarouselSlide key={slide._key}>
                <CarouselSlideInner>
                  <SlideImg src={urlFor(slide)} alt={slide?.alt}></SlideImg>
                </CarouselSlideInner>
                <p>{slide?.title}</p>
                <p>{slide?.description}</p>
              </CarouselSlide>
            ))}
          </CarouselContainer>
        </ContainerViewPort>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </Container>
    </>
  );
}
