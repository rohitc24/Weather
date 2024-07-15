import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Getweather from './Getweather'
import Weatherinfo from './Weatherinfo'
import Error from './Error'

function App() {
  const [info,setinfo]=useState();
  const [err,seterr]=useState("");
  console.log(err)
  console.log(info)
let upadteinfo=(res)=>{
  setinfo(res);
  seterr(false);
}
let updateerr=(e)=>{
  console.log(err)
  seterr(e);
  setinfo();
}
  return (
    <>
      <Getweather updateinfo={upadteinfo} updateerr={updateerr}/>
      {err && <Error err={err}/>}
      {info && <Weatherinfo info={info}/>}
    </>
  )
}

export default App
