import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import { RulesSlider } from "../molecules/RulesSlider";

export const StartPage = ({ onStartGame }) => {
  return (
    <section className="my-0 mx-auto max-w-[1000px] w-full h-[600px] flex flex-col items-center">
      <div className="flex flex-col justify-center items-center">
        <Title />
        <h2 className="font-thin text-center md:text-[16px] text-[12px]">
          Игра найди пару
        </h2>
      </div>
      <RulesSlider />
      <Button onClick={onStartGame} className="md:mt-[40px] mt-[10px]">
        Начать игру
      </Button>
    </section>
  );
};
