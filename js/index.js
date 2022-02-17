function getValue(element,isInput){
    // checking is it is input type or not
    if(isInput){
        let elementValue=parseFloat(document.getElementById(element).value);
        // recursion
        const typeError=getValue("type-error",false);
// if the value is greater than 0
        if(elementValue>0){
        return elementValue;
        }
        else if(elementValue<=0){
            typeError.style.display="block";
            typeError.style.color="red";
            return 0;
        }
    }else{
        const elementValue=document.getElementById(element);
        return elementValue;
    }
}
//event handler for calculate button
document.getElementById("calculate-expense").addEventListener("click",function(){
    const income=getValue("income",true);
    const food=getValue("food",true);
    const rent=getValue("rent",true);
    const cloth=getValue("cloth",true);
    const remainingBalanceText=getValue("remaining-balance",false);
    const totalExpense=getValue("total-expense",false);
    const expenseError=getValue("expense-error",false);
    let total=food+rent+cloth;
    if(total<=income){
    totalExpense.innerText=total;
    const remainingBalance=income-total;
    remainingBalanceText.innerText=remainingBalance;
    expenseError.style.display="none";
    }else{
        expenseError.style.display="block";
        expenseError.style.color="red";
        totalExpense.innerText=total;
        remainingBalanceText.innerText=0;
    }
})
//event handler for saving button
document.getElementById("save").addEventListener("click",function(){
    const savingAmount=getValue("saving-amount",false);
    const lastAmountText=getValue("last-balance",false);
    const saveInputText=getValue("save-input",true);
    const remainingBalanceText=getValue("remaining-balance",false);
    const income=getValue("income",true);
    const savingError=getValue("saving-error",false);
    const saving=income*(saveInputText/100);
    savingAmount.innerText=saving;
    let lastAmount=remainingBalanceText.innerText-saving;
    lastAmountText.innerText=lastAmount;
    savingError.style.display="none";
    if(saving>remainingBalanceText.innerText){
        savingError.style.display="block";
        savingError.style.color="red";
        lastAmountText.innerText=0;
    }
})