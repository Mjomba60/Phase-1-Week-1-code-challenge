function calculateNetSalary(basicSalary, benefits){
    let grosspay = basicSalary + benefits;
    let nssf = basicSalary * 6/100;//Calculating NSSF
    let nhif;
    let taxablePay = grosspay-benefits;
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
    let payee = function (taxablePay){
        if (taxablePay < 24000){
            return 0
        } else if(taxablePay = 24000){
            return ((taxablePay - 24000)* 10/100);
        } else if (taxablePay > 24000){
            return ((taxablePay - 24001)*25/100)
        } else if (taxablePay > 32333){
            return((taxablePay - 32333)*30/100)
        }
    }
    //calculating deductions
    let deductions = nhif + nssf
    let netSalary = grosspay - deductions - payee

    return (`Payee: ${payee}, NSSf: ${nssf}, NHIF: ${nhif}, Net salary: ${netSalary}`)


}