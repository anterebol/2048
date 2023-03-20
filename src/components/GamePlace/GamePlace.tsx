import './gamePlace.css';
import { NumberBox } from '../NumberBox/NumberBox';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addRandomTwo } from '../../store/appReducer';
import { useEffect } from 'react';

export const GamePlace = () => {
  const gameState = useAppSelector((state) => state.appReducer.gameState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addRandomTwo())
  }, [])
  return <div className="game-place">{gameState.map((line, lineIndex) => line.map((number, boxIndex) => <NumberBox key={`${lineIndex}-${boxIndex}`} number={number} />))}</div>
}