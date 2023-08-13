import './App.css';
import Header  from './components/Header';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
// import Fields from './components/Fields';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {

  const [ name, setName] = useState("");
  const [ email, setEmail] = useState("");
  const [data,setData] = useState([]);

  const addData = () =>{
    setData([...data,{name,email}])    // ... is spread operator
    setName("");
    setEmail("");
  }

  const removeItem = (index) =>{
   let arr = data;
   arr.splice(index,1); 
    data.splice(index, 1);
    setData([...arr]);
  }
   const HandlePress = (event) =>{
      if (event.key === 'Enter') {
        addData();
      }
   }
  return (
    <div className="App">
     <Header/>

     {/* form */}
     <div className='form'> 
     <Stack spacing={2} direction="row">
     <TextField 
     onKeyPress={(e)=> HandlePress(e)}
     value={name} onChange={(event)=>setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
     <TextField 
      onKeyPress={(e)=> HandlePress(e)}
     value={email} onChange={(event)=>setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
     <Button onClick={addData} color="success" variant="contained">
      <AddIcon/>
     </Button>
     </Stack>
     </div>

        {/* DATA */}
        <div className='data'>
            <div className='data_val'>
              <h4>Name</h4>
              <h4>Email</h4>
              <h4>Remove</h4>
            </div>
            {
              data.map((element,index)=>{

                  return(
                    <div key={index} className='data_val'>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
              <Button onClick={()=> removeItem(index)} variant="contained" color="error">
              <DeleteIcon />
            </Button>
            </Stack>
     </div>
                  )


              })
            }
        </div>

    </div>
  );
}

export default App;
