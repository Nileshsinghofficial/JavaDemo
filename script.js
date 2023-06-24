const calculateTemp = () =>{
    const inputTemp = document.getElementById('temp').value;
    //console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected .selectedIndex].value;
    //console.log(valueTemp);
 
    //Celsius to Fahrenheit
    const celToFah = (cel) =>{
        let fahrenheit = Math.round((cel* 9/5) +32).toFixed();
        return fahrenheit;
    }
    //Fahrenheit to Celsius
    const fahToCel = (fah) =>{
        let celsius = Math.round((fah- 32)* 5/9);
        return celsius;
    }
    if(valueTemp == 'cel'){
       
        document.getElementById('resultContainer').innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else{
        document.getElementById('resultContainer').innerHTML= fahToCel(inputTemp) + "&#176; Celcius";
    }
}