import s from "./Contact.module.css";
import { GoPersonFill } from "react-icons/go";
import { MdPhone } from "react-icons/md";

const Contact = ({ name, id, number, onDelete }) => {
  return (
    <li className={s.item}>
      <div className={s.content}>
        <p className={s.name}><GoPersonFill /> {name}</p>
        <p className={s.phone}><MdPhone /> {number}</p>
      </div>
      <button
        className={s.btn}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
