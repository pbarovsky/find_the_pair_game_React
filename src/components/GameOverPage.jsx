import React from 'react';
import Button from './Button';

import sc from './GameOverPage.module.css'

const GameOverPage = ({ onRestart }) => {
  return (
    <div className={sc.modal}>
      <h2>Вы проиграли!</h2>
      <Button onClick={onRestart}>Рестарт</Button>
    </div>
  );
}

export default GameOverPage;
