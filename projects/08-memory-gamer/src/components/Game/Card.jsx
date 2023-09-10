import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { MemoryContext } from '../contexts/Memory';
import { THEME_GAME } from '../../const/const';
export const Card = ({ option, isFlipped, onSeletedOption, isBlock, isMatch }) => {
  const {theme} = useContext(MemoryContext)
    const className = isFlipped || isMatch ? 'card hidden' : 'card'

    return (
      <div className="card-container">
        <button onClick={onSeletedOption} className={className} disabled={isFlipped || isBlock}></button>
        <span className={`card-icon ${isMatch ? 'match' : ''}`}>
          {theme === THEME_GAME.ICONS && (<FontAwesomeIcon icon={option} />)}
          {theme === THEME_GAME.NUMBERS && (<>{option}</> )}
        </span>
      </div>
    );
  };
