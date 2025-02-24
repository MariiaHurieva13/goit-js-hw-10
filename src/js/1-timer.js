import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("button");
let userSelectedDate = null;

btnStart.disabled=true;

let calendar = flatpickr(input, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    locale: {
      firstDayOfWeek:1,  
    },
    onClose(selectedDates) {
      userSelectedDate =  selectedDates[0]
      if (userSelectedDate - Date.now()<0) {
        btnStart.disabled = true;
        iziToast.show({
                backgroundColor: 'rgba(239, 64, 64, 1)',
                messageColor: `rgba(255, 255, 255, 1)`,
                close: `true`,
                position: "topRight",
                title: 'Error',
                titleColor: '#fff',
                titleSize: '16px',
                message: 'Please choose a date in the future'
      });
    } else {
        btnStart.disabled = false;
    };
   },
  });


btnStart.addEventListener("click", () => {
    
    timer.start ();
})

const timer = {

   intervalId: null,

   start () { 
    this.intervalId = setInterval (()=>{
    this.tik()}, 1000);
    btnStart.disabled = true;
    input.disabled = true;
   },

   stop() {
    clearInterval(this.intervalId);
    ShowTime({'days':'00',      'hours': '00',      'minutes': '00',      'seconds': '00'     })
    input.disabled = false;
   },

   tik () {
    const currentTime = Date.now();
    const ms =  userSelectedDate - currentTime;
    if (ms<=0) {

        this.stop();
    }
    const time = convertMs(ms);
    
    const str = addLeadingZero(time);
    
    ShowTime(str)
   }
};

function ShowTime(tt){
  if(tt.seconds.indexOf('-')>-1) return
  document.querySelector("span[data-days]").textContent=tt.days;
  document.querySelector("span[data-hours]").textContent=tt.hours;
  document.querySelector("span[data-minutes]").textContent=tt.minutes;
  document.querySelector("span[data-seconds]").textContent=tt.seconds;
}


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

function addLeadingZero ({ days, hours, minutes, seconds }) {
    days = days.toString().padStart(2, "0");
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    return {days,hours,minutes,seconds};
}




  
 /*console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}*/









/*


    //.value.dataset.days
    //const str = timeToStr(time);
    //console.log(str);




function getTimeComponent (ms) {
    const days = Math.floor(ms % (1000*60*60*24));
    const hours = Math.floor((ms%(1000*60*60*24))/(1000*60*60));
    const mins = Math.floor((ms%(1000*60*60))/(1000*60));
    const secs = Math.floor((ms%(1000*60))/1000);
    
    const field = document.querySelector(".value");
    let dayText = field.dataset.days;
    console.log(dayText);


    const obj = {days, hours, mins, secs};
   // console.log(obj);
    return obj;
    
}

function timeToStr ({days, hours, mins, secs}) {
    


*/
