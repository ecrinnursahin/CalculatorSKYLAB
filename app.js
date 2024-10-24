function appendToDisplay(value) /*fonksiyon, fonksiyon ismi, içine girilecek değişkene value dedik*/
{
    document.getElementById("display").value += value; /* ID ile dökümanı getir, ismi display yani sonuç kısmı, value değerini display kısmına ekle yani bir nevi yazdır */

}

function clearDisplay() /*fonksiyon, fonksiyon ismi, silme fonksiyonu*/
{
    document.getElementById("display").value = " "; /*ID ile dökümanı getir, ismi display yani sonuç kısmı, boş bir string ile değiştir*/

}
function clearDisplay2(){
    
    document.getElementById("display").value=display.value.slice(0, -1); /* ekranındaki son karakteri sil, sondan(-1) 0. elemanı sil */
}

function percentage(){
    document.getElementById("display").value = display.value/100;

}

function squareRoot(){
    try{document.getElementById("display").value = Math.sqrt(display.value);}
    catch(error){
        display.value ="Tanımsız"
    }

}

function appendPower() {
    const display = document.getElementById("display").value += "**";
}


function calculateResult() /*fonksiyon, fonksiyon ismi, hesaplama/sonuç fonksiyonu*/
{   const display = document.getElementById("display"); /* htmldeki displayi display isili değişkene atadık ona kolay erişebilmek için */
    try{
        display.value=eval(display.value) /* Displayin değeri demek, evalotion yap yani stringin değerini hesapla, display.value demek */
    }
    catch(error){
        display.value ="Hatalı Giriş!"
    }

}

document.addEventListener("keydown", function(event){
    const key=event.key;
    const display = document.getElementById("display");
    if(!isNaN(key) || key==="."){
       appendToDisplay(key); /* ekrana değeri(key) ekle */
    }
    else if(key==="+" || key==="-" || key==="/" || key==="*"){
        appendToDisplay(key);
    }
    else if(key==="Escape"){
        clearDisplay();
    }
    else if(key==="Backspace"){
        clearDisplay2();
    }
    else if(key==="Enter"){
        calculateResult();
    }
    else if(key==="%"){
        percentage();
    }
    else if(key==="ü"){
        appendPower();
    }
    else if(key==="k"){
        squareRoot();
    }
})