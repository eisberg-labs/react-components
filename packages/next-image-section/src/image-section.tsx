import React from 'react';
import Image from 'next/image';

export interface Props {
  src: string;
  alt: string;
  rootClassName?: string;
  containerClassName?: string;
  opacity?: number;
}

export default function ImageSection({
  src,
  children,
  alt,
  rootClassName,
  opacity,
  containerClassName = 'container',
}: React.PropsWithChildren<Props>) {
  return (
    <section className={`image-section ${rootClassName ?? ''}`}>
      <Image priority={true} src={src} fill className={'cover'} alt={alt} />
      <div className={'overlay'} style={{ opacity: opacity ?? 0.6 }} />
      <div className={`content ${containerClassName ?? ''}`}>{children}</div>
    </section>
  );
}
