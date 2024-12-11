import React from "react";
import Button from "./Button";

import sc from "./StartPage.module.css";

const MainPage = ({ onStartGame }) => {
  return (
    <section className={sc.card_ui}>
      <div className={sc.desc}>
        <h1>Найти пару</h1>
        <h2>Правила игры:</h2>
        <ul>
          <li>Каждый раунд вам нужно найти 2 одинаковых плитки.</li>
          <li>Если плитки совпали, они исчезают.</li>
          <li>Если нет — они закрываются.</li>
          <li>На каждый раунд дается 100 секунд.</li>
          <li>Раунд закончится, когда все плитки будут открыты.</li>
        </ul>
      </div>
      <Button onClick={onStartGame}>Начать игру</Button>
    </section>
  );
};

export default MainPage;
