import {useState} from 'react';

function App() {

  const [name , setName]=useState("Mehmet");//setName namein değerini değiştirecek fonk.
  const [age , setAge] =useState(39);//ilk 2 sinde state tanımladık ve nasıl kullanıldıklarını öğrendik
  const [friends , setFriends] = useState(["Ahmet","Murat","Betül"]);//burda arrayState öğrendik.
  const [address,setAddress] = useState({title:"İstanbul", zip:34255});//burda objectSatate öğrendik.

  return (
    <div className="App">
      <h1>
        Merhaba {name}! 
        <br />
        Yaşınız {age}.
        
      </h1>
      <button onClick={()=>setName('Betül')}>Click for name</button>
      <br />
      <button onClick={()=>setAge(19)}>Click for age</button>
      <br />
      <hr />
      <br />
      <h2>Friends</h2>
      {
        friends.map((friends,key) => (<div key={key}>{friends} </div>)
      )}
      <br />
      <button onClick={()=> setFriends(["Selim",...friends,"Ayşe","Ömer","Yahya"])}>Add new friends</button>
      <br />
      <hr />
      <br />
      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <br />
      <button onClick={()=> setAddress({title:"Ankara",zip:3456})}>Click new address</button>
      <br />
      <br />
      <button onClick={()=> setAddress({...address,title:"Çanakkale"})}>Change the title</button>
      <br />
      <button onClick={()=> setAddress({...address,zip:5566})}>Change the zip</button>
    </div>
  );
}

export default App;
