import React from 'react';
import Image from 'next/image';
import styles from './image-section.module.css';
import classNames from 'classnames';

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
    <section
      className={classNames({
        [styles.root]: true,
        'py-2': true,
        [rootClassName ?? '']: !!rootClassName,
      })}
    >
      <Image priority={true} src={src} fill className={styles.cover} alt={alt} />
      <div className={styles.overlay} style={{ opacity: opacity ?? 0.6 }} />
      <div
        className={classNames({
          [styles.content]: true,
          [containerClassName ?? '']: !!containerClassName,
        })}
      >
        {children}
      </div>
    </section>
  );
}
