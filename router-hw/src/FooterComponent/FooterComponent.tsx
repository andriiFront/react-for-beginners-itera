import React from 'react';
import styles from './FooterComponent.module.scss'

type Props = {
  text: string;
  url: string;
  callback: (url: string) => void;
}

export const FooterComponent: React.FC<Props> = ({ text, url, callback }) => (
  <>
    <p className={styles.text}>{text}</p>
    <a
      className={styles.link}
      onClick={() => callback(url)}
      target='blank'
      href={url}
    >
      Press
    </a>
  </>
);
