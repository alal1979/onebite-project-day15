import "./ContactItem.css";
import { memo,useCallback } from "react"; 

function  ContactItem({id, name, contact, delContact})  {
  const onSubmit = useCallback(()=>{
    delContact(id);
  },[delContact, id]);

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onSubmit}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);


