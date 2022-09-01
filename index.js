let clock = () =>{
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let msec = date.getMilliseconds();
    let mo = date.getMonth();
    let dy = date.getDate();
    let yr = date.getFullYear();
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let period = 'AM';
    if(hrs==0)hrs=12;
    if(hrs>12) {
        hrs= hrs-12;
        period='PM';
    }
    msec= Math.floor(msec/10);
    msec = msec < 10 ? `0${msec}` : msec ;
    secs = secs < 10 ? `0${secs}` : secs ;
    mins = mins < 10 ? `0${mins}` : mins ;
    hrs = hrs < 10 ? `0${hrs}` : hrs ;
    let time = `${hrs} : ${mins} : ${secs} : ${msec} : ${period}`;
    let fullDate = `${months[mo]} ${dy}, ${yr}`;
    document.querySelector('.fullDate').innerText=fullDate;
    document.querySelector('.clock').innerText=time;
    setInterval(clock,100);
}

clock();
