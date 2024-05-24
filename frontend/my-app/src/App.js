import { useState } from "react"
import axios from "axios"
import {useNavigate} from"react-router-dom"
function App()
{
  const navigate=useNavigate()
  var[fname,setfname]=useState("")
  var[pname,setpname]=useState("")
  function fhandle(evt)
  {
    setfname(evt.target.value)
  }
  function phandle(evt)
  {
    setpname(evt.target.value)
  }
  function handlebutton()
  {
    var login=axios.post("http://localhost:5000/",{"username":fname,"password":pname})
    login.then(function(data)
  {
   if(data.data===true)
    {
   navigate("/success") 
    }
    else
    {
      navigate("/fail")
    }
  })
  
  }
return(
   
  <>
    <span>USERNAME</span>
    <input value={fname} onChange={fhandle} name="username"></input><br></br>
    <span>PAASWORD</span> 
    <input value={pname} onChange={phandle} name="password"></input><br></br>
    <button onClick={handlebutton}>SUBMIT</button>
  </>
)
}
export default (App)