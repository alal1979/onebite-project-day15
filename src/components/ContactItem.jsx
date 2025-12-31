import "./ContactItem.css";
import { memo,useCallback , useContext} from "react"; 
import { TodoDispatchContext} from '../App'

function  ContactItem({id, name, contact })  {
  const { delContact } = useContext(TodoDispatchContext);

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


