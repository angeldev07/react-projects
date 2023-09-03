import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Score } from "./Score";

const boardInitialState = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  .sort(() => Math.random() - 0.5)
  .map((option) => ({ option, isFlipped: false }));

const Button = ({ option, isFlipped, onSeletedOption, isBlock }) => {
  const className = isFlipped ? 'card hidden' : 'card'
  return (
    <div className="card-container">
      <button onClick={onSeletedOption} className={className} disabled={isFlipped || isBlock}></button>
      <span className="card-icon">{option}</span>
    </div>
  );
};

export const Board = () => {
  const [board, setBoard] = useState(boardInitialState);
  const [blockBoard, setBlockBoard] = useState(false)
  const [selected, setSelected] = useState([])
  const [match, setMatch] = useState([])
  const [moves, setMoves] = useState(0)

  const handleSelectedOption = ({ index }) => () => {
      const newBoard = board.map((card, i) => {
        if (i == index) {
          return {
            ...card,
            isFlipped: true,
          };
        }
        return card;
      });
      setBoard(newBoard)

      //agregamos al selected option 
      setSelected(prev => [...prev, newBoard[index]])
  };

  //efecto para controlar las selecciones qeu no sean mayor de 2 y reiniciar los estado si lo amerita
  useEffect(()=> {
    if(selected.length <= 1 ) return 

    const [first, second] = selected

    if(first.option !== second.option){
      setBlockBoard(true)
      setTimeout(() => {
        setBoard(prev => prev.map(card => ({...card, isFlipped: false})))
        setSelected([])
        setBlockBoard(false)
        setMoves(moves + 1)
      }, 1000);
      return
    }

    if(first.option === second.option) {
      setMatch(prev => [...prev, first.option])
      setSelected([])
      setMoves(moves + 1)
    }

  }, [selected])

  //efecto para determinar si se gano owo 
  useEffect(() => {
    if(match.length < board.length / 2) return 
    Swal.fire({
      title: "You win ",
      text: "You won this time. ",
      icon: "success",
      confirmButtonText: "Cool",
    });
  }, [match])
  

  return (
    <section>
      <div className="board">
        
        {board.map(({ option, isFlipped }, index) => (
          <Button key={index} option={option} isFlipped={isFlipped || match.includes(option)} onSeletedOption={handleSelectedOption({index})} isBlock={blockBoard}/>
        ))}
      
      </div>
      <Score moves={moves} />
    </section>
  );
};
