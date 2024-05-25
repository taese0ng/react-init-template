import { ImgHTMLAttributes, useEffect, useState } from "react";
import styled from "styled-components";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  className?: string;
}

function SvgIcon({ name, ...restProps }: Props) {
  const [src, setSrc] = useState<string | undefined>();

  useEffect(() => {
    import(`../assets/images/${name}.svg`)
      .then((image) => {
        setSrc(image.default);
      })
      .catch((error) => console.error(`Error loading image: ${error}`));
  }, [name]);

  return <Icon src={src} {...restProps} />;
}

export default SvgIcon;

const Icon = styled.img``;
