import React ,{useState} from "react";
    const styles = `.cem-counter * {
          font-size: 200%;
        }

        .cem-counter span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        .cem-counter button {
          width: 5rem;
          height: 5rem;
          border: none;
          border-radius: 10px;
          background-color: blue;
          color: white;
        }`;

export const CemCounter = ()=>{

const [count,setCount] = useState(0)

 return (
      <div className="cem-counter">
        <style>{styles}</style>
        <button onClick={() => setCount(count-1)}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => setCount(count+1)}>
          +
        </button>
      </div>
 )

}

interface State {
  count: number;
}
interface Props {}

export default class MyCounter extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const styles = `.my-counter * {
          font-size: 200%;
        }

        .my-counter span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        .my-counter button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }`;

    return (
      <div className="my-counter">
        <style>{styles}</style>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <span>{this.state.count}</span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
