import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    background: ${(props) =>
      props.hours >= 0 && props.hours < 12
        ? "#fce784"
        : props.hours >= 12 && props.hours <= 18
        ? "#ac5c24"
        : "#5e4c77"};
  padding: 0;
  margin: 0;
  font: normal 15pt arial;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
