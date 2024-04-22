const submit = document.querySelector("#submit");
const loader = document.getElementById("loader");


submit.addEventListener('click', (event) => {
    event.preventDefault();  
    document.querySelector(".result").innerHTML  = ""
    loader.classList.remove('hidden');  

    setTimeout(function() {
        loader.classList.add('hidden');  
        generatePassword();
    }, 2000);

 
});

function generatePassword() {
   
    const passwordLength = document.getElementById("psdLength").value;
    const lowerCase = document.getElementById("lowerCase").checked;
    const upperCase = document.getElementById("upperCase").checked;
    const includeNumbers = document.getElementById("icdNum").checked;
    const includeSymbols = document.getElementById("icdSymb").checked;
    let allowedLowerCaseCharacaters = "abcdefghijklmnopqrstuvwxyz";
    let allowedUpperCaseCharacaters = allowedLowerCaseCharacaters.toUpperCase();
    let Numbers = "0123456789";
    let Symbols = "#=<>?$@%&'()*+-_,/.:;|ƒ€"
    let allowedCharacaters = "";
    let password = "";
    allowedCharacaters += lowerCase ? allowedLowerCaseCharacaters : "";
    allowedCharacaters += upperCase? allowedUpperCaseCharacaters : "";
    allowedCharacaters += includeNumbers ? Numbers : "";
    allowedCharacaters += includeSymbols ? Symbols : "";
    if(allowedCharacaters.length === 0){
       document.querySelector(".result").innerHTML = "please select at least 1 option";
       }
    else{
    for(let i = 0; i < passwordLength ; i++){
        let randomNum = Math.floor(Math.random() * allowedCharacaters.length);
        password += allowedCharacaters[randomNum]
    }
    document.querySelector(".result").innerHTML = password;
}

}
