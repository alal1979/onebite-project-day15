import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import {TodoStateContext} from "../App"

export default function ContactList( ) {
  const state  = useContext(TodoStateContext);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {state.map((item)=>{
          return <ContactItem key={item.id} {...item}  />
      })} 
     
    </div>
  );
}
