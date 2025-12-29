import "./ContactEditor.css";
import { useState,useRef } from "react"; 

export default function ContactEditor({addContact}) {

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
    if(nameRef.current.value === ''){
      nameRef.current.focus();
      return; 
    }

   if(contactRef.current.value === ''){
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
