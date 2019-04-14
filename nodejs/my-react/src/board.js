import React from 'react';
import './index.css';
import Square from './square';
//import registerServiceWorker from './registerServiceWorker';
class Board extends React.Component {

    // constructor(){
    //     super();
    //     this.state={
    //         squares:Array(9).fill(null),
    //         xIsNext:true,
    //     }
    // }

    renderSquare(i) {
      return (<Square 
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      />);
    }
  
    render() {
        let status;
        const winner=this.props.calculateWinner(this.props.squares)
        if(winner){
            status ='win is: '+(winner);
        }else{
            status = 'Next player: '+(this.props.xIsNext?"X":"O");
        }
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

export default Board;
  //registerServiceWorker();

