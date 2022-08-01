import data from '../data.json';
import { Data } from '../Data/Data';
import { Ctx } from '../Context/context';

export const About = () => (
  <Ctx.Provider value={data}>
    <Data />
    <Data />
    <Data />
  </Ctx.Provider>
)


