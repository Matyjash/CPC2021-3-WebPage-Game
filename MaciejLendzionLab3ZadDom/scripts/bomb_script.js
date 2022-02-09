//licznik czasu
let timeCounter = 0;
// czas po jakim wybuchnie bomba
let explosionTime = 999;
// odpowiedzialny za interwały
let interval;
// przycisk rozpoczynajacy gre
const startButton = document.getElementById("start-button");
// hasło do wpisania
let password = "000000";
// wpisane hasło
let passwordTyped = "000000";
// EventListener sprawdzajacy czy myszka jest nad przyciskiem
startButton.addEventListener("mouseover", GlowButton);





//funkcja resetująca elementy bomby
function Reset() {
    document.getElementById("timer").innerHTML = "0:00";
    explosionTime = 999;
    timeCounter = 0;
    document.getElementById("password").innerHTML = "000000";
    startButton.disabled = false;
    password = "000000";
    passwordTyped = "000000";
}
//funckja generująca hasło do przepisania
function GeneratePassword() {
    let randomNumber = Math.floor((Math.random()) * 1000000);
    let randomNumberString = "";
    randomNumberString = randomNumber.toString();

    if (randomNumber < 100000) randomNumberString = "0" + randomNumberString;
    if (randomNumber < 10000) randomNumberString = "0" + randomNumberString;
    if (randomNumber < 1000) randomNumberString = "0" + randomNumberString;
    if (randomNumber < 100) randomNumberString = "0" + randomNumberString;
    if (randomNumber < 10) randomNumberString = "0" + randomNumberString;
    document.getElementById("password-to-type").innerHTML = "PASSWORD: "+randomNumberString;
    password = randomNumberString;
}
//funkcja rozpoczynająca działanie skryptu i oczekiwanie na start
function Start() {
    //wyłączenie guzika startu
    startButton.disabled = true;
    //generowanie losowego hasła
    GeneratePassword();

    //generowanie czasu do wybuchu
    explosionTime = Math.floor((Math.random()) * 800 + 600);

    //wczytyujemy poziom trudności
    let difficulty = localStorage.getItem("difficulty");

    //uwzględniamy go przy czasie do wybuchu
    if (difficulty!=null) {
        if (difficulty.toString() == "medium") explosionTime -= 100;
        else if (difficulty.toString() == "hard") explosionTime -= 200;
    } 

    //ustawiamy licznik czasu
    timeCounter = explosionTime;
    //rozpoczynamy odmierzanie czasu
    StartTimer();
    
}
//funkcja rozpoczynajaca pomiar czasu
function StartTimer() {
    //ustawiamy interwały aktualizujace czas
    interval = setInterval(UpdateTimer, 10);
    
}
// funkcja aktualizujaca czas w liczniku i graficznie
function UpdateTimer() {
    //zmieniszamy licznik
    timeCounter--;
    //jeżeli odlcizanie dobiegło końca
    if (timeCounter <= 0) {
        //zatrzymujemy licznik
        StopTimer();
        //informujemy o porażce
        alert("Porażka!");
    }
    //wyświetlamy stan licznika
    document.getElementById("timer").innerHTML = parseInt(timeCounter / 100) + ":" + timeCounter % 100;
}

//metoda imitujaca miganie guzika startu przy najechaniu na niego
function GlowButton() {
    startButton.style.backgroundColor = "red";
    setTimeout(function () {
        setTimeout(function () {
            startButton.style.backgroundColor = "red"
            setTimeout(function () {
                startButton.style.backgroundColor = "white"
                setTimeout(function () {
                    startButton.style.backgroundColor = "red"
                    setTimeout(function () {
                        startButton.style.backgroundColor = "white"
                    }, 200)

                }, 500)

            }, 500)

        }, 500)
        startButton.style.backgroundColor = "white"
    }, 500)

}

// funkcja zatrzymujaca pomiar czasu
function StopTimer() {
    clearInterval(interval);
    setTimeout(Reset, 1000);
    
}
//wybranie konkretnych liczb na klawiatrze numerycznej
function AddZero() {
    passwordTyped = passwordTyped+"0";
    passwordTyped = passwordTyped.substring(1, 7);
    document.getElementById("password").innerHTML = passwordTyped;
}
function AddOne() {
    passwordTyped = passwordTyped+"1";
    passwordTyped = passwordTyped.substring(1, 7);
    document.getElementById("password").innerHTML = passwordTyped;
}
function AddTwo() {
    passwordTyped = passwordTyped+"2";
    passwordTyped = passwordTyped.substring(1, 7);
    document.getElementById("password").innerHTML = passwordTyped;
}
function AddThree() {
    passwordTyped = passwordTyped+"3";
    passwordTyped = passwordTyped.substring(1, 7);
    document.getElementById("password").innerHTML = passwordTyped;
}
function AddFour() {
    passwordTyped =  passwordTyped+ "4";
    passwordTyped = passwordTyped.substring(1, 7);
    document.getElementById("password").innerHTML = passwordTyped;
}
function AddFive() {
    passwordTyped = passwordTyped+"5";
    passwordTyped = passwordTyped.substring(1, 7);
    document.getElementById("password").innerHTML = passwordTyped;
}
function AddSix() {
    passwordTyped = passwordTyped+ "6";
    passwordTyped = passwordTyped.substring(1, 7);
    document.getElementById("password").innerHTML = passwordTyped;
}
function AddSeven() {
    passwordTyped = passwordTyped + "7";
    passwordTyped = passwordTyped.substring(1, 7);
    document.getElementById("password").innerHTML = passwordTyped;
}
function AddEight() {
    passwordTyped = passwordTyped + "8";
    passwordTyped = passwordTyped.substring(1, 7);
    document.getElementById("password").innerHTML = passwordTyped;
}
function AddNine() {
    passwordTyped = passwordTyped + "9";
    passwordTyped = passwordTyped.substring(1, 7);
    document.getElementById("password").innerHTML = passwordTyped;
}
// usuwanie wporwadzonego hasła
function Clear() {
    passwordTyped = "000000";
    document.getElementById("password").innerHTML = passwordTyped;
}
//potwierdzenie wprowadzonego hasła
function Confirm() {
    // z zależności od poprawności wyświetlamy odpowiedzni komunikat i kończymy odliczanie
    if (passwordTyped == password) {
        StopTimer();
        alert("Sukces!");
    }
    else {
        StopTimer();
        alert("Porażka!");
    }
    
    
}