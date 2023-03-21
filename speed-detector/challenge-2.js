//evaluateSpeed takes a parameter of speed and returns OK,License suspended or demerit points based on the speed entered

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