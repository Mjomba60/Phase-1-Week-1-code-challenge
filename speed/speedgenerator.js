// evaluate the speed
function evaluateSpeed(speed){
    let demeritValue;
    if (speed<= 70){
     return "OK";   
    } else {
        demeritValue = (speed-70)/5;
        if(demeritValue > 12){
            return "License suspended";
        } else{
            return `Points: ${demeritValue}`;
        }
    }
}

//grab form and add event listener
document.addEventListener("DOMContentLoaded", () =>{
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let value = e.target.grade.value
        let p = document.querySelector('#speed-result')
        p.innerText = evaluateSpeed(value)
        
    })
})