//function that calculates students grade
//function takes a parameter of grade to operate on
function calculateGrade(grade){
    let result = 0;
    if (grade > 100){
        result = "Invalid grade";
        return result;
    }
    else if (grade > 79){
        result = "A";
        return result;
    } else if (grade < 80 && grade > 60){
        result ="B";
        return result;
    } else if (grade > 49 && grade < 59){
        result ="C";
        return result;
    } else if (grade > 40 && grade < 50){
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

//input grade
let grade;
//calculate garde
calculateGrade(grade);