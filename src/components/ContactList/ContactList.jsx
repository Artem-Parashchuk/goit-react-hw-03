import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = ({ cards, onDelete }) => {
  return (
    <ul className={s.list}>
      {cards.length > 0 ? (
        cards.map((item) => (
          <Contact
            onDelete={onDelete}
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </ul>
  );
};

export default ContactList;
