import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useState,useRef ,useReducer} from "react"; 

const mokData = [
  {
    id :0,
    name :  "이정환",
    contact : "king199777@gmail.com"
  },
   {
    id :1,
    name :  "홍길동",
    contact : "kingDong@gmail.com"
  },
   {
    id :2,
    name :  "고길동",
    contact : "goKilDong@gmail.com"
  }
];

const reducer = (state, action) => {
  switch(action.type){
    case "INCREMENT" :  
       return [action.newData , ...state  ];
    case "DECREMENT" : 
      return state.filter( (item) => item.id !== action.targetId);
    default:
      return state;  
  }

}


function App() {
  // const [state, setState] = useState(mokData);
  const [state, dispatch] = useReducer( reducer ,mokData );
  const addRef = useRef(3);

  const addContact = (info) =>{ 
    console.log("id",info);
    dispatch({
      type : "INCREMENT",
      newData : 
        {
          id: addRef.current++,
          name:info.name,
          contact: info.contact
        }  
    })  
  }

  const delContact = (targetId) =>{
    dispatch( {
      type : "DECREMENT",
      targetId : targetId
    })  
  }


  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor addContact={addContact}/>
      </section>
      <section>
        <ContactList state={state} delContact={delContact}/>
      </section>
    </div>
  );
}

export default App;
