import Button from "../atoms/Button";
import Title from "../atoms/Title";
import RulesSlider from "../molecules/RulesSlider";

import sc from "./StartPage.module.css";

const MainPage = ({ onStartGame }) => {
  return (
    <section className={sc.start_page__card}>
      <div className={sc.start_page__card_about}>
        <Title />
        <h2 className={sc.subtitle}>Игра найди пару</h2>
      </div>

      <RulesSlider />

      <Button onClick={onStartGame} className={sc.start_page_button}>
        Начать игру
      </Button>
    </section>
  );
};

export default MainPage;
