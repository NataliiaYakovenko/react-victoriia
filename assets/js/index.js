"use strict";

//JSX - спеціальний синтаксис (синтаксичний цукор)

//Babel: jsx => js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//<></> - react fragment для компонування кількох елементів
function App() {
  const isLight = true;
  return (
    <>
      <ThemeButton isLightTheme={isLight} />
    </>
  );
}

function ThemeButton(props) {
  const { isLightTheme } = props;

  const buttonStyle = {
    color: isLightTheme ? "blue" : "yellow",
    backgroundColor: isLightTheme ? "yellow" : "blue",
  };
  return <button style={buttonStyle}>Switch to {isLightTheme ? "dark" : "light"}</button>;
}
