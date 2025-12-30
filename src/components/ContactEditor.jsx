import "./ContactEditor.css";
import { useState,useRef,memo } from "react"; 

 const ContactEditor = ({addContact}) => {

  const [info, setInfo] = useState({
    name : "",
    contact :""
  });

  const nameRef = useRef(null);
  const contactRef = useRef(null);

  const onInfo = (e) =>{
    setInfo({
        ...info,
        [e.target.name] : e.target.value
      });
  }

  const onSubmit = (e) => {  
    if (info.name.trim() === "") {
      nameRef.current.focus();
      return; 
    }

   if (info.contact.trim() === "") {
      contactRef.current.focus();
      return;
    } 
    addContact(info);
    setInfo({
       name : "",
       contact :""
    });

  }

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input name="name" ref={nameRef} className="name" placeholder="이름 ..." value={info.name} onChange={onInfo}  />
        <input name="contact" ref={contactRef} className="contact" placeholder="연락처(이메일) ..." value={info.contact} onChange={onInfo} />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}



export default memo(ContactEditor);