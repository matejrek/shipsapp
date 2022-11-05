import css from '../../styles/Details.module.scss'
import Bg from '../../public/bg.svg';

export default function DataBox(props:any){

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