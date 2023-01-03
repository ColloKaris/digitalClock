const clock = document.querySelector('.clock');

//create a function responsible for updating the time
//on the digital clock every second
//we'll be calling this function every second so that a new date
//object is created everysecond so that we can get the hours minutes
//and update the browsers
const tick = () => {

    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    
    //create html template to inject into the DOM
    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html;

};

setInterval(tick, 1000);
