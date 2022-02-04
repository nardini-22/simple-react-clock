import { useEffect, useState } from "react";
import MorningImage from "./assets/fotomanha.png";
import NightImage from "./assets/fotonoite.png";
import EveningImage from "./assets/fototarde.png";
import { GlobalStyle } from "./styles/globalstyles";
import { Footer, Header, Section, Texts } from "./styles/styles";

export default function App() {
  let date = new Date();
  let hour = date.getHours();
  // let hour = 18;
  const [hours, setHours] = useState();
  useEffect(() => {
    setHours(hour);
  }, [hour]);
  return (
    <>
      <GlobalStyle hours={hours} />
      <Header>
        <h1>Hora do dia</h1>
      </Header>
      <Section>
        <Texts id="primarymsg">Agora são {hours} horas!</Texts>
        <div id="image">
          <img
            id="img"
            src={`${
              hours >= 0 && hours < 12
                ? MorningImage
                : hours >= 12 && hours <= 18
                ? EveningImage
                : NightImage
            }`}
            alt="day img"
          />
        </div>
        <Texts id="secondarymsg">
          {hours >= 0 && hours < 12
            ? "Bom dia!"
            : hours >= 12 && hours <= 18
            ? "Boa tarde!"
            : "Boa noite!"}
        </Texts>
      </Section>
      <Footer>
        <p>&copy;ArSaN.js</p>
      </Footer>
    </>
  );
}
