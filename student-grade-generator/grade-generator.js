//calculate grade
function calculateGrade(grade){
    let result;
   if (grade > 100){
        result = "Invalid grade";
        return result;
    }
    else if (grade > 79){
        result = "A";
        return result;
    } else if (grade < 80 && grade >= 60){
        result ="B";
        return result;
    } else if (grade > 49 && grade <= 59){
        result ="C";
        return result;
    } else if (grade >= 40 && grade < 50){
        result ="D";
        return result;
    } else if(grade < 40){;
        result = "E";
        return result;
    } else if(grade < 0){
        result = "Invalid grade";
        return result;
    }
}


//create DOm even listener
document.addEventListener("DOMContentLoaded", () =>{
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let value = e.target.grade.value
        let p = document.querySelector('#grade-result')
        p.innerText = calculateGrade(value)
        
    })
})