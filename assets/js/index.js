"use strict";

//JSX - спеціальний синтаксис (синтаксичний цукор)

//Babel: jsx => js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//<></> - react fragment для компонування кількох елементів
function App() {
  return (
    <>
      <Header />
      <NewsItem/>
      <main titl="Hello!">Hello React!</main>
      <UserInfo />
      <Footer />
    </>
  );
}

function UserInfo() {
  const user = {
    name: "Natalia",
    age: 41,
    imgSrc:
      "https://i.fbcd.co/products/resized/resized-750-500/c-1000-designbundle-cute-girl-princess-05-20-07-8a491e77f13686c64ca3b4a2144e801786b4e159b735f21f4e8333a04e94e0f8.jpg",
  };
  //інлайн стилі  //краще записувати стилі в css
  const userNameStyle = {
    color: user.age >= 18 ? "rgb(213, 116, 134)" : "grey",
    // backgroundColor: "rgb(1, 0, 0)",
  };

  return (
    <article className="userCard">
      <h2 style={userNameStyle}>{user.name}</h2>
      <img src={user.imgSrc} alt={user.name}></img>
    </article>
  );
}

//class => className  - клас трансформується в класнейм, можна задавати декілька класів
//атрибути іменуються в cemelCase
//style - це об'єкт (імена властивостеу в cemelCase)

function NewsItem() {
  const news = { titel: "Some news", body: "Something happened", isGood: true };
  const bodyColor = {
    backgroundColor: news.isGood === true ? "pinc" : "blue",
  };
  return (
    <article style={bodyColor}>
      <h2>{news.titel}</h2>
      <p>{news.body}</p>
    </article>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Page title</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <span>Contacts</span>
    </footer>
  );
}
