function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years); 
    
    if(principal <= 0){
        document.getElementById("result").innerHTML =" "
        alert("please enter postive number");
        document.getElementById("principal").focus();    
    }
    else{
    document.getElementById("result").innerHTML="If you deposit <span class='bg-color'>"
    +principal+"</span>"+",\<br\>at an interest rate of <span class='bg-color'> "
    +rate+"%</span>\<br\>You will receive an amount of <span class='bg-color'>"
    +interest+"</span>,\<br\>in the year <span class='bg-color'>"
    +year+"</span>\<br\>" 
    }  
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        