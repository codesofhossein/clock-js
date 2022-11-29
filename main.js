function showTime(){

    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();


    let zaman = "AM" ;
    let day = date.getDay();

    switch (day){

        case 0 : 
            day = "Sunday" ;
            break;
        case 1 : 
            day = "Monday" ;
            break ;
        case 2 : 
            day = "Tuseday" ;
            break ;
        case 3 : 
            day = "Wednesday" ;
            break ;
        case 4 : 
            day = "Thursday" ;
            break ;
        case 5 : 
            day = "Friday" ;
            break ;
        case 6 : 
            day = "Sunday" ;
            break ;
        
    }

    if (h > 12) {

        h = h-12 ;
        zaman = "PM" ;
    }

    if (h === 0) h = 12 ;

    h = (h < 10) ? `0${h}` : h ;
    m = (m < 10) ? `0${m}` : m ;
    s = (s < 10) ? `0${s}` : s ;

    document.querySelector(".clock").innerText = `${h} : ${m} : ${s} ${zaman} ` ;
    document.querySelector(".showday").innerText = day ;
}

setInterval(showTime , 1000);