import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const prm = new Promise((resolve, reject) => {
    setTimeout(() => {
      state === "fulfilled" ? resolve(delay) : reject(delay);
        }, delay);
    });

  prm
  .then(delay => {
        
      iziToast.show({
        backgroundColor: 'rgba(89, 161, 13, 1)',
        messageColor: `rgba(255, 255, 255, 1)`,
        close: `false`,
        position: "topRight",
        message: `✅ Fulfilled promise in ${delay}ms`
  });
    })
    .catch(delay => {
      iziToast.show({
        backgroundColor: 'rgba(239, 64, 64, 1)',
        messageColor: `rgba(255, 255, 255, 1)`,
        close: `false`,
        position: "topRight",
        message: `❌ Rejected promise in ${delay} ms`
  });
    });
  form.reset()
  })
