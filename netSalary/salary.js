function calculateNetSalary(basicSalary, benefits){
    let grosspay = parseFloat(basicSalary) + parseFloat(benefits);
    let nssf = parseFloat(basicSalary,10) * 6/100;//Calculating NSSF
    let nhif;
    let taxablePay = grosspay - benefits;
    // calculating NHIF
    if (grosspay >= 100000){
        nhif = 1700;
    } else if (grosspay >= 90000 ){
        nhif = 1600
    } else if (grosspay >= 80000) {
        nhif = 1500;
    } else if(grosspay >= 70000){
        nhif =1400;
    } else if (grosspay >= 60000){
        nhif = 1300;
    } else if (grosspay >= 50000){
        nhif = 1200
    } else if(grosspay >= 45000){
        nhif = 1100;
    }else if (grosspay >= 40000){
        nhif = 1000;
    }else if(grosspay >= 35000){
        nhif = 950;
    }else if (grosspay >= 30000){
        nhif = 900;
    } else if (grosspay >= 25000){
        nhif = 850;
    } else if (grosspay >= 20000){
        nhif = 750;
    }else if (grosspay >= 15000){
        nhif = 600;
    }else if(grosspay >= 12000){
        nhif = 500;
    }else if(grosspay >= 8000){
        nhif = 400;
    }else if(grosspay >= 6000){
        nhif = 300;
    }else if(grosspay < 6000){
        nhif =150;
    }
//calculation PAYE
    
     function calcPayee(taxablePay){
        let first = 0
        let second = 0
        let thrid = 0
        let payee;
        if(taxablePay <= 24000){
            first = 24000*0.1
            payee = first
        } else if(taxablePay > 24000){
            first = 24000*0.1
            second = (taxablePay - 24000)*0.25
            payee = first + second
        } else if(taxablePay > 32333){
            first = 24000*0.1
            second = 8333*0.25
            thrid = (taxablePay - 32333)*0.3
            payee = first + second + thrid

        }
        console.log(payee)
        return parseFloat(payee - 2400)
    }

    let payee = calcPayee(taxablePay)

    //calculating deductions
    let deductions = nhif + nssf
    let netSalary = parseFloat(taxablePay - deductions - payee)
    console.log(netSalary, grosspay, payee, deductions, basicSalary, benefits)

    return (`Payee: ${payee}\n NSSf: ${nssf}\n NHIF: ${nhif} \n Net salary: ${netSalary}`)

}

//create DOm even listener
document.addEventListener("DOMContentLoaded", () =>{
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let bSalary = e.target.basicSalary.value
        let benefits = e.target.benefits.value
        let p = document.querySelector('#salary-result')
        p.innerText = calculateNetSalary(bSalary, benefits)
        
    })
})