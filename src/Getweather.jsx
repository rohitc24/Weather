import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Error from "./Error";

export default function Getweather({updateinfo,updateerr}){
    const [city,setcity]=useState("Bishnupur");
    const Api_key="157bb8af2d74cabfa3f0de1509bbdc26";
    const Url="https://api.openweathermap.org/data/2.5/weather";
    const getweatherinfo=async()=>{
        try{
            var res= await axios.get(`${Url}?q=${city}&appid=${Api_key}&units=metric`);
            var data={
                city: res.data.name,
                feels_like: res.data.main.feels_like,
                humidity: res.data.main.humidity,
                timezone: res.data.timezone,
                visibility: res.data.visibility,
                temp: res.data.main.temp,
                temp_max: res.data.main.temp_max,
                temp_min: res.data.main.temp_min,
                sunrise: res.data.sys.sunrise,
                sunset: res.data.sys.sunset,
                rain:res.data.rain,
                wind_speed: res.data.wind.speed,
                wind_dir: res.data.wind.deg,
                pressure:res.data.main.pressure,
                weather: res.data.weather[0].main,
    
            }
            setcity("");
            updateinfo(data);
       
        // console.log(data);
        // console.log(res);
        }catch(e){
            // console.log(e.response.data.message)
            throw e;
        }
    }
    const handlechange=(e)=>{
        setcity(e.target.value);
    }
    const handlesubmit=async (e)=>{
        e.preventDefault();
        // console.log(city)
        setcity("");
        try{
            await getweatherinfo();
        }catch(e){
            updateerr(e.response.data.message);
        }
    }
    useEffect(()=>{getweatherinfo()},[])
    return (
        <>
        <form onSubmit={handlesubmit}>
        <h3 style={{textDecoration:"underline"}}>Weather App</h3>
        <TextField id="city" label="City" variant="outlined" onChange={handlechange} value={city}/>
        <br /><br />
        <Button variant="contained" type="submit">Submit</Button>
        </form>
        </>
    )
}