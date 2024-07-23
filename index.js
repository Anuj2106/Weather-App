let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");
 let cityearch=document.querySelector(".city_name");
let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");
 let city="Pune";
 citySearch.addEventListener("submit",(e)=>{
    e.preventDefault();
     let name =document.querySelector('.city_name');
      city=name.value;
      getweatherdata();

 })
//   to Get CIty name 
const getcountryname=(code)=>{
    return  new Intl.DisplayNames([code], { type: 'region' }).of(code);
}
//  To  get date 
const getdatetime=(dt)=>{
const curDate=new Date(dt*1000);
console.log(curDate);
const options={
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
    hour:"numeric",
    minutes:"numeric"
}
const formatter= new Intl.DateTimeFormat('en-US',options);
const formattedate=formatter.format(curDate);
return formattedate;


}
const getweatherdata= async () =>{
    const apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=965e37db69693cda9d5c132146a5e772`; //leave s for use api 
 try {
    const res = await fetch(apiurl);
    const data = await res.json();
 const {main,name,sys,weather,wind,dt,}=data;
  cityName.innerHTML=`${name},${getcountryname(sys.country)}`;
  dateTime.innerHTML=getdatetime(dt);
  w_forecast.innerHTML=weather[0].main; 
  w_icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;
  w_temperature.innerHTML=`${main.temp}  \u00B0` ;
  w_maxTem.innerHTML=` Max:${main.temp_max.toFixed()}  \u00B0`;
  w_minTem.innerHTML= ` Min:${main.temp_min.toFixed()}  \u00B0`;
 w_feelsLike.innerHTML=`${main.feels_like.toFixed()}`;
 w_humidity.innerHTML=`${main.humidity.toFixed()}`;
 w_wind.innerHTML=`${wind.speed} m/s`;
 w_pressure.innerHTML=`${main.pressure}hpa  `;

  console.log(data)
 } catch (error) {
    console.log(error);
 }
}



document.body.addEventListener("load",getweatherdata())