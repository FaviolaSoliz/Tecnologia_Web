function sumar()
{
    
    let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);

    
    let sum= num1+num2;
    
    document.getElementById('resultado').value =sum;

}

function restar()
{
    
    let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);

    
    let sum= num1-num2;
    
    document.getElementById('resultado').value =sum;

}

function multiplicar()
{
    
    let num1= parseFloat(document.getElementById('numero1').value);
    let num2= parseFloat(document.getElementById('numero2').value);

    
    let sum= num1*num2;
    
    document.getElementById('resultado').value =sum;

}