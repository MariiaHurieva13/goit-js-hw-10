import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-A92OCY9B.js";const a=document.querySelector("#datetime-picker"),r=document.querySelector("button");let s=null;r.disabled=!0;m(a,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,locale:{firstDayOfWeek:1},onClose(t){s=t[0],s-Date.now()<0?(r.disabled=!0,f.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Please choose a date in the future"})):r.disabled=!1}});r.addEventListener("click",()=>{h.start()});const h={intervalId:null,start(){this.intervalId=setInterval(()=>{this.tik()},1e3),r.disabled=!0,a.disabled=!0},stop(){clearInterval(this.intervalId),i({days:"00",hours:"00",minutes:"00",seconds:"00"}),a.disabled=!1},tik(){const t=Date.now(),e=s-t;e<=0&&this.stop();const o=p(e),n=S(o);i(n)}};function i(t){t.seconds.indexOf("-")>-1||(document.querySelector("span[data-days]").textContent=t.days,document.querySelector("span[data-hours]").textContent=t.hours,document.querySelector("span[data-minutes]").textContent=t.minutes,document.querySelector("span[data-seconds]").textContent=t.seconds)}function p(t){const d=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:u,seconds:l}}function S({days:t,hours:e,minutes:o,seconds:n}){return t=t.toString().padStart(2,"0"),e=e.toString().padStart(2,"0"),o=o.toString().padStart(2,"0"),n=n.toString().padStart(2,"0"),{days:t,hours:e,minutes:o,seconds:n}}
//# sourceMappingURL=1-timer.js.map
