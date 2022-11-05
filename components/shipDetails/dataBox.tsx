import css from '../../styles/Details.module.scss'
import Bg from '../../public/bg.svg';

export interface Props {
  dataBoxTitle: string;
  dataBoxValue: string | number
}

export default function DataBox(props:Props){

  return (
    <div className={css.dataBox}>
      <Bg />
      <div className={css.dataBoxContent}>
      <span className={css.title + " playful"}>{props.dataBoxTitle}</span>
      <span className={css.data  + " list-title"}>{props.dataBoxValue}</span>
      </div>
    </div>
  );
}