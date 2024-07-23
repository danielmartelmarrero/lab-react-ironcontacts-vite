import { useState } from "react";
import "./App.css";
import contactsList from "./contacts.json"


function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0,5))
  
  
  function getRandomContact(){
    let randomIndex = Math.floor(Math.random()* contactsList.length);
    let randomContact = contacts[randomIndex]

    return randomContact
  }

  const newContact = () => {
    const newContact = getRandomContact();
    setSelectedContacts([...contacts, newContact])
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button disabled={contacts.length == contactsList.length} onClick={newContact}>Add New Contact</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        
        {contacts.map((oneContact)=>{
          return (<tr key={oneContact.id}>
            <td><img src={oneContact.pictureUrl} alt="" /></td>
            <td>{oneContact.name}</td>
            <td>{(oneContact.popularity).toFixed(2)}</td>
            <td>{oneContact.wonOscar ? "🏆" : ""}</td>
            <td>{oneContact.wonEmmy ? "🌟" : ""}</td>
          </tr>)
        

        })}
        
      </table>
    </div>
  );
}

export default App;
