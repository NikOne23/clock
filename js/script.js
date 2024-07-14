let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow   = document.querySelector('.h'),
    hoursBox    = document.querySelector('.hours'),
    minutesBox  = document.querySelector('.minutes');
    
let user = {
    name: 'dasdas'
}
    


function startWatch() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours   = time.getHours();
        
        secondArrow.style = `transform: rotate(${seconds * 6}deg)`
        minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
        hourArrow.style = `transform: rotate(${hours * 30}deg)`
        
        hoursBox.innerHTML = hours
        minutesBox.innerHTML = minutes
        
        setTimeout(() => startWatch(),1000)
        
}

startWatch()


// рекурсия - это когда функция запускает саму себя внутри себя






// let i = 0;

// function qwerty() {
//     if(i < 100) {
//         console.log(i);
//         i++
//         setTimeout(() => qwerty(), 1000)
//     }
// }

// qwerty()



let li   = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
    
console.log(li);
console.log(tabs);
    
li.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive () {
    li.forEach((el, i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}


let stopSeconds = document.querySelector('.stopwatch__seconds'),
    stopMinutes = document.querySelector('.stopwatch__minutes'),
    stopHours   = document.querySelector('.stopwatch__hours'),
    btn         = document.querySelector('.stopwatch__btn'),
    span        = document.querySelector('.tabsLink__span');
    
let i = 0;
    
btn.addEventListener('click', () => {
    if(btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
        setTimeout(() => startSecundomer(btn, i),1000)
    }else if(btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
    }else {
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
        stopHours.innerHTML = stopMinutes.innerHTML = stopSeconds.innerHTML = 0
    }
})


function startSecundomer(button, i) {
    if(button.innerHTML == 'stop') {
        if(i == 59) {
            i = 0
            stopSeconds.innerHTML = i
            if(stopMinutes.innerHTML == 59) {
                stopMinutes.innerHTML = 0
                stopHours.innerHTML++
            }else {
                stopMinutes.innerHTML++
            }
        }else {
            i++
            stopSeconds.innerHTML = i
        }
        
        setTimeout(() => startSecundomer(button,i), 1000) 
        
    }
}