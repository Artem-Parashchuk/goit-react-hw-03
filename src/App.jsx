import { useEffect, useState } from "react";
import s from "./App.module.css";
import formData from "./assets/formData.json";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [cards, setCards] = useState(() => {
    return JSON.parse(window.localStorage.getItem("cards")) || formData;
  });

  const [filter, setFilter] = useState("");

  useEffect(
    () => window.localStorage.setItem("cards", JSON.stringify(cards)),
    [cards]
  );

  const addCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };

  const deletCard = (id) => {
    setCards((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const visibleCards = cards.filter((task) =>
    task.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAdd={addCard} />
      <SearchBox
        value={filter}
        onFilter={setFilter}
      />
      <ContactList
        cards={visibleCards}
        onDelete={deletCard}
      />
    </div>
  );
}

export default App;
