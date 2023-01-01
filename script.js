const settings = document.querySelector("#settings");
const body = document.querySelector("#body");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const days = document.querySelector("#day");
const months = document.querySelector("#month");
const years = document.querySelector("#year");

let myInterVal = setInterval( () => {
	
	//Time(hours,minutes and seconds);
   var date =  new Date() ;
   var  hrs = date.getHours ();
   var  mins = date.getMinutes ();
   var secs = date.getSeconds ();
   
   //Month,Day and year
  var day = date.getDate();
  var month = date.toLocaleString("default", { month: "long"});
  var year = date.getFullYear();
   
   //Time
hours.innerHTML =  hrs;
minutes.innerHTML =  mins ;
seconds.innerHTML = secs;

//calendar
months.innerHTML =  month;
days.innerHTML = day;
years.innerHTML = year;


if(hrs >12){
	let newHour = hrs - 12;
	hours.innerHTML =    newHour;
	};
	
if(hrs < 10){
		let newHours = "0" + hrs;
		hours.innerHTML = newHours;
		};
	
if(mins < 10){
		let newMinutes = "0" + mins;
		minutes.innerHTML = newMinutes;
		};
		
		if(secs < 10){
		let newSeconds = "0" + secs;
		seconds.innerHTML = newSeconds;
		};
	//date if
	if(day < 10){
		days.innerHTML = "0" + day;
		};
	
},1000);






