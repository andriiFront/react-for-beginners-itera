import React from 'react';
import './App.css';

type Props = {
  text: string;
  url: string;
  callback: (url: string) => void;
}

export const FooterComponent: React.FC<Props> = ({ text, url, callback }) => (
  <>
    <p>{text}</p>
    <a 
      onClick={() => callback(url)}
      target='blank'
      href={url}
    >
      Press
    </a>
  </>
);
