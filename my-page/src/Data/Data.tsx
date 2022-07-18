import React from 'react';
import styles from './Data.module.scss'

type Props = {
  data: string;
}

export const Data: React.FC<Props> = ({ data }) => (
  <h1 className={ styles.data }>{data}</h1>
);
