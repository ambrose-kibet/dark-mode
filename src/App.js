import "./App.css";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Artcle from "./Artcle";
import articles from "./data";
const getTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
function App() {
  const [theme, settheme] = useState(getTheme());
  const toggleTheme = () => {
    if (theme === "light-theme") {
      settheme("dark-theme");
    } else settheme("light-theme");
  };
  useEffect(() => {
    document.documentElement.classList = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav className="nav">
        <h1 className="tittle">Overeacted </h1>
        <button className="btn" onClick={() => toggleTheme()}>
          {theme === "light-theme" ? (
            <FaMoon className="icon" />
          ) : (
            <FaSun className="icon" />
          )}
        </button>
      </nav>
      <section className="article-container">
        {articles.map((item) => (
          <Artcle key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
