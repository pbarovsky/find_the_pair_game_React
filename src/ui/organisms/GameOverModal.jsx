import ReactDOM from "react-dom";
import { Button } from "../atoms/Button";
import sc from "./GameOverModal.module.css";

export const GameOverModal = ({ onRestart }) => {
  return ReactDOM.createPortal(
    <>
      <div className={sc.backdrop}></div>
      <div className={sc.modal}>
        <h2 className={sc.modal_title}>Вы проиграли!</h2>
        <div className={sc.modal_actions}>
          <Button onClick={onRestart}>В меню</Button>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};
