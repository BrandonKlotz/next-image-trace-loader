import * as React from "react";
import Image from 'next/image';

type ImageTraceProps = {
  src: string,
  trace: string,
  delay?: string,
  width?: string,
  height?: string,
  nextImageProps?: any
}

function ImageTrace({ src, trace, delay='0.5s', width='auto', height='auto', nextImageProps }: ImageTraceProps) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div style={{ position: 'relative', left: 0, top: 0 }}>
      <div
        style={{
          width: width,
          height: height,
          opacity: imageLoaded ? 1 : 0,
          transition: `opacity ${delay} ease`,
          position: 'absolute'
        }}
      >
        <Image
          src={src}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          {...nextImageProps} 
        />
      </div>
      <div 
        style={{
          width: width,
          height: height,
          transition: `opacity ${delay} ease`,
          opacity: imageLoaded ? 0 : 1,
        }}
      >
        <Image
          src={trace}
          {...nextImageProps} 
        />
      </div>
    </div>
  );
}

export default ImageTrace;
