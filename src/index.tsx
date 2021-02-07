import * as React from "react";
import Image from 'next/image';

type ImageTraceProps = {
  src: string,
  trace: string,
  nextImageProps?: any
}

function ImageTrace({ src, trace, nextImageProps }: ImageTraceProps) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div style={{ position: 'relative', left: 0, top: 0 }}>
      <div style={{
        opacity: imageLoaded ? 1 : 0,
        transition: 'opacity 0.5s ease',
        position: 'absolute'
      }}>
        <Image
          src={src}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          {...nextImageProps} />
      </div>
      <div style={{
        transition: 'opacity 0.5s ease',
        opacity: imageLoaded ? 0 : 1,
      }}>
        <Image
          src={trace}
          {...nextImageProps} />
      </div>
    </div>
  );
}

export default ImageTrace;