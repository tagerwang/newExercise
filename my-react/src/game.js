import React from 'react';
import './index.css';
import Board from './board';
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Link } from 'react-router-dom'
console.log(Link)
class Game extends React.Component {
    calculateWinner(squares){
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0;i<lines.length;i++){
            const [a,b,c]=lines[i];
            if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
                return squares[a];
            }
        }
        return '';
    }
    handleClick(i){
        //const squares=this.state.squares.slice();
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(this.calculateWinner(squares)||squares[i]){
            return;
        }
        squares[i]=this.state.xIsNext?"x":"O"  
        // this.setState({
        //     squares:squares,
        //     xIsNext:!this.state.xIsNext,
        // });
        this.setState({
            history: history.concat([{
              squares: squares
            }]),
            xIsNext: !this.state.xIsNext,
          });
        setTimeout(()=>{//setState是被延迟执行的；
            console.log(this.state.squares)
        },1000)
        
    }
    constructor(props){
        super(props);
        console.log(this)
        this.state={
            history:[{
                squares:Array(9).fill(null),
            }],
            xIsNext:true,
        }
    }
    render() {
        
        const history = this.state.history;
        const current = history[history.length - 1];
        console.log(history,current.squares,'cur')
        // const winner = this.calculateWinner(current.squares);
      return (
        <Router>
        <div className="game">
          tager: {this.props.tager}
          <div>name: {this.props.name}</div>
          <div className="game-board">
            <Board 
            calculateWinner={this.calculateWinner}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        {/* <Route path="/about" component={About} /> */}
        </div>
      </Router>
      );
    }
  }

export default Game;
  //registerServiceWorker();

