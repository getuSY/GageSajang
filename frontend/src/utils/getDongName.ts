import { areas } from '../data/areaDong';

const getDongName = (admCd: string) =>
  areas.find((dong) => dong.admCd === admCd)?.name;

export default getDongName;
