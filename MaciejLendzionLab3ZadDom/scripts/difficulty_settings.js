//wczytywanie ustawień trudności
function InitLevel() {
    //pobieramy z zasobów lokalnych poziom trudności
    let diff = localStorage.getItem("difficulty");

    //w zależności od tego jaki był ustawiony przechodzimy do odpowiedniej metody a jeżeli nie został ustaiony to ustawiamy na łatwy
    if (diff != null) {
        if (diff.toString() == "easy") SetDifficultyToEasy();
        else if (diff.toString() == "medium") SetDifficultyToMedium();
        else if (diff.toString() == "hard") SetDifficultyToHard();
        else SetDifficultyToEasy();
    } else {
       SetDifficultyToEasy();
    }
    
}

//resetowanie przycisków do ustawiania poziomów trudności
function ResetDifficultyButtons(){
    //usuwamy wczystkie z klasy "aktywnych"
    document.getElementById("easy-button").classList.remove('active');
    document.getElementById("medium-button").classList.remove('active');
    document.getElementById("hard-button").classList.remove('active');
}
//ustawienie poziomu trudności na łatwy
function SetDifficultyToEasy() {
    //resetujemy przyciski
    ResetDifficultyButtons();
    //zapisujemy loklanie poziom trudności
    localStorage.setItem("difficulty", "easy");
    //dodajemy odpowiedni przycisk do grupy "aktywnych"
    document.getElementById("easy-button").classList.add('active');
}

//ustawienie poziomu trudności na średni
function SetDifficultyToMedium() {

    ResetDifficultyButtons();
    localStorage.setItem("difficulty", "medium");
    document.getElementById("medium-button").classList.add('active');

}
//ustawienie poziomu trudności na trudny
function SetDifficultyToHard() {
    ResetDifficultyButtons();
    localStorage.setItem("difficulty", "hard");
    document.getElementById("hard-button").classList.add('active');
}