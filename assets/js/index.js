"use strict";

//JSX - спеціальний синтаксис (синтаксичний цукор)

//Babel: jsx => js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//<></> - react fragment для компонування кількох елементів
function App() {
  const isLight = true;
  const name = 'Nataliia'
  return (
    <>
      <ThemeButton isLightTheme={isLight} />
      <Greeting isGreeting = {true} userName = {name}/>
      <Greeting isGreeting = {false} userName = 'Roland'/>
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

function Greeting(props){
  const {userName,isGreeting} = props
  return <div> {isGreeting ? `Hello ${userName}`: `Goodbay ${userName}`}</div>
}
//----------------------------------------------------------------
/*
Реалізувати компонент isGreating, який буде виводити дані, який буде виводити рядок "Hello, ім'я",
де ім'я задане в App

*/
