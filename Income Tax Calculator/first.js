const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const income = document.querySelector("#income");
    const amount = parseInt(income.value);

    const result = document.querySelector('h2');
    let TotalTax = 0;

    if(amount <= 1200000) 
        TotalTax = 0;
    
    else if(amount <= 1600000)
        TotalTax= (amount-1200000)*0.15;

    else if(amount<=2000000){
        TotalTax= (amount-1600000)*0.20 + 60000;
    }
    else if(amount<=2400000){
        TotalTax= (amount-2000000)*0.25 + 60000+ 80000;
    }
    else{
        TotalTax = (amount-2400000)*0.30 + 60000+ 80000+ 100000;
    }

    result.textContent = `Total Tax: ${TotalTax}`;
    form.reset();

})
