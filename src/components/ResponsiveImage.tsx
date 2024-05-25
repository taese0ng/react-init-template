import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import placeholderImage from "@assets/images/placeholderImage.png";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  lazy?: boolean;
  className?: string;
}

function ResponsiveImage({ lazy, className, src, ...restProps }: Props) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (lazy) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (src) {
              setImageSrc(src);
            }
            observer.disconnect();
          }
        });
      });

      if (imageRef.current) {
        observer.observe(imageRef.current);
      }

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    } else if (src) {
      setImageSrc(src);
    }
  }, [lazy, src]);

  return (
    <Container className={className}>
      <Image ref={imageRef} src={imageSrc ?? placeholderImage} {...restProps} />
    </Container>
  );
}

export default ResponsiveImage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
