import React from 'react';
import './App.css';

type Props = {
  data: string;
}

export const Data: React.FC<Props> = ({ data }) => (
  <h1>{data}</h1>
);
