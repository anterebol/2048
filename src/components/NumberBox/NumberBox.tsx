import './numberBox.css';
export const NumberBox = (props: {number: number}) => {
  return <div className="number-box">{props.number}</div>
}