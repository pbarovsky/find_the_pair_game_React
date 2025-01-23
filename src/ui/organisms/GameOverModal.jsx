import ReactDOM from "react-dom";
import { Button } from "../atoms/Button";

export const GameOverModal = ({ onRestart }) => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-backdrop z-[1000]"></div>
      <div className="fixed top-2/4 left-2/4 bg-main rounded-[5px] z-[1001] text-center w-[80%] max-w-[400px] p-[20px] shadow-modal -translate-x-2/4 -translate-y-2/4">
        <h2 className="mb-[20px] text-[24px] text-accent text-center">Вы проиграли!</h2>
        <div className="flex flex-row justify-center items-center">
          <Button onClick={onRestart}>В меню</Button>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};
