import { Button } from "../atoms/Button";

export const FooterActions = ({ exit, restart }) => {
  return (
    <div className="flex flex-row justify-between max-w-[250px] w-full mt-[20px] sm:mt-[50px]">
      <Button onClick={restart}>Рестарт</Button>
      <Button onClick={exit}>Покинуть</Button>
    </div>
  );
};
