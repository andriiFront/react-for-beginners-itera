import { useContext } from 'react';
import { Ctx } from '../Context/context';
import styles from './Data.module.scss'

export const Data = () => {
  const { firstName } = useContext(Ctx);

  return (
    <h1 className={ styles.data }>{firstName}</h1>
  );
};
