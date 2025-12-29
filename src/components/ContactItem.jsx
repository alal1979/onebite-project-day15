import "./ContactItem.css";

export default function ContactItem({id, name, contact, delContact}) {
  const onSubmit = ()=>{
    delContact(id);
  }

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={onSubmit}>🗑️ Remove</button>
    </div>
  );
}
