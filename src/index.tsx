import * as React from "react";
import Image from "next/image";

type ImageTraceProps = {
  src: string;
  trace: string;
  delay?: string;
  width?: string;
  height?: string;
  nextImageProps?: any;
};

function ImageTrace({
  src,
  trace,
  delay = "0.5s",
  width = "auto",
  height = "auto",
  nextImageProps,
}: ImageTraceProps) {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const defaultStyles = {
    width: width,
    height: height,
    transition: `opacity ${delay} ease`,
  };

  return (
    <div style={{ position: "relative", left: 0, top: 0 }}>
      <div
        style={{
          ...defaultStyles,
          ...{ position: "absolute", opacity: imageLoaded ? 1 : 0 },
        }}
      >
        <Image
          src={src}
          onLoad={() => setImageLoaded(true)}
          {...nextImageProps}
        />
      </div>
      <div
        style={{
          ...defaultStyles,
          ...{ opacity: imageLoaded ? 0 : 1, pointerEvents: "none" },
        }}
      >
        <Image src={trace} {...nextImageProps} />
      </div>
    </div>
  );
}

export default ImageTrace;
