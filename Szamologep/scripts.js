

// Számológép
//Gombok által bevitt értékek tárolása és megjelenítése a kijelzőn
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let result = [];
let resultString;

buttons.forEach(buttons => buttons.addEventListener('click',() => szamol(buttons)));


function szamol(buttons) {
    
    const ButtonsValue = buttons.value;

    if (ButtonsValue === "allClear") 
    {
        //Törlés
        result = [];
        display.textContent = '.';
    }else if (ButtonsValue === "=")
    {
        //Műveletek elvégzése eval() függvénnyel majd az eredmény megjelenítése (nem a legbiztonságosabb, de egy számológéphez jónak találtam)
        display.textContent = eval(resultString); 
    }else if (ButtonsValue === "√") 
    {
        //Négyzetgyök vonás
        display.textContent = Math.sqrt(eval(resultString));
    }else if (ButtonsValue === "percent") 
    {
        //Százalék számitás
        display.textContent = eval(resultString += "/100");
    }else{
        //Beírt adatok megjelenítése a kijelzőn
        result.push(ButtonsValue);
        resultString = result.join('');
        display.textContent = resultString;
    }
}


//Téma
const settingsButtons = document.querySelectorAll('input');

settingsButtons.forEach(settingsButtons => settingsButtons.addEventListener('click',() => changeColor(settingsButtons)))

//Téma kiválasztása az input által megadott érték szerint
function changeColor(settingsButtons)
{
    const settingsButtonsValue = settingsButtons.value

    if (settingsButtonsValue === "dark") 
    {
        firstColorChanged = '#121B1C';
        firstColorFadedChanged = '#253638';
        secondaryColorChanged = '#EAECEE';
        secondaryColorFadedChanged = '#93D7E0';
        fontFamilyType = "Arial";

    }else if(settingsButtonsValue === "white")
    {
        firstColorChanged = '#ABB2B9';
        firstColorFadedChanged = '#EBEDEF';
        secondaryColorChanged = '#1B2631';
        secondaryColorFadedChanged = '#2E4053';
        fontFamilyType = "Arial";

    }else if(settingsButtonsValue === "darkBlue")
    {
        firstColorChanged = '#121B1C';
        firstColorFadedChanged = '#253638';
        secondaryColorChanged = '#76D7C4';
        secondaryColorFadedChanged = '#4A6C70 ';
        fontFamilyType = "monospace";
        
    }else if(settingsButtonsValue === "LightBlue")
    {
        firstColorChanged = '#121B1C';
        firstColorFadedChanged = '#253638';
        secondaryColorChanged = '#81BCC4';
        secondaryColorFadedChanged = '#93D7E0';
        fontFamilyType = "monospace";
    }
    else{
        firstColorChanged = '#121B1C';
        firstColorFadedChanged = '#253638';
        secondaryColorChanged = '#81BCC4';
        secondaryColorFadedChanged = '#93D7E0';
        fontFamilyType = "Arial";
    }
    

    document.documentElement.style.setProperty('--firstColor', firstColorChanged)
    document.documentElement.style.setProperty('--firstColorFaded', firstColorFadedChanged)
    document.documentElement.style.setProperty('--secondaryColor', secondaryColorChanged)
    document.documentElement.style.setProperty('--secondaryColorFaded', secondaryColorFadedChanged)
    document.documentElement.style.setProperty('--fontFamily1', fontFamilyType)

}