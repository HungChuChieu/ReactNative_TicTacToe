
import { useState } from "react";
import { View, Text, Button } from "react-native";
import gameStyles from "./css";
import Square from "./square";

const MyTicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [xIsTurn, setXIsTurn] = useState(true);

  const handleClick = (i) => {
    const newBoard = board.slice();
    if (calculateWinner(board) || board[i]) {
      return;
    }
    newBoard[i] = xIsTurn ? "X" : "O";
    setXIsTurn(!xIsTurn);
    setBoard(newBoard);
  };

  const renderSquare = (i) => {
    return (
      <View>
        <Square
          value={board[i] +""}
          onClick={() => {
            handleClick(i);
          }}
        />
      </View>
    );
  };

  let status;
  const winner = calculateWinner(board);
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${xIsTurn ? "X" : "O"}`;
  }

  return (
    <View style={gameStyles.game}>
      <View style={gameStyles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={gameStyles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={gameStyles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
      <Text>{status}</Text>
      <Button 
        title="Reset"
        style={gameStyles.square}
        onClick={()=>{
            setBoard(Array(9).fill(null)) ;
            console.log(board);
        }}></Button>
    </View>
  );
};

function calculateWinner(boards) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (boards[a] && boards[a] === boards[b] && boards[a] === boards[c]) {
      return boards[a];
    }
  }
  return null;
}

export default MyTicTacToe;
