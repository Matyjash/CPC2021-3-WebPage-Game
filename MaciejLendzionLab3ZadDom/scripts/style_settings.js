//inicjalizacja ustawień stylu
function Init() {
    //pobieramy rodzaj stylu z zasobów lokalnych
    let style = localStorage.getItem("style");

    //w zależności od tego jaki jest to rodzaj przechodzimy do odpowiedniej funkcji lub domyslnie ustawiamy custom
    if (style != null) {
        if (style.toString() == "dark") SetStyleToDark();
        else if (style.toString() == "contrast") SetStyleToContrast();
        else if (style.toString() == "custom") SetStyleToCustom();
        else SetStyleToCustom();
    } else {
        SetStyleToCustom();
    }

}
//ustawienie stylu na domyslny
function SetStyleToCustom() {
    //wyłączamy inne style
    ToggleOffAll();
    // pobieramy "ciało" strony
    var element = document.body;
    // aktualizujemy je o osnosnik do odpowiedniego stylu
    element.classList.toggle("custom-mode");
    localStorage.setItem("style", "custom");
    //dodajemy przycisk odpowiedzialny za dany styl do grupy "aktywnych" aby wskazać że jest on aktualnie wybrany
    document.getElementById("custom-style-button").classList.add('active');
}

//ustawienie stylu na ciemny
function SetStyleToDark() {
    ToggleOffAll();
    var element = document.body;
    element.classList.toggle("dark-mode");
    localStorage.setItem("style", "dark");
    document.getElementById("dark-style-button").classList.add('active');

}
//ustawienie stylu na kontrast
function SetStyleToContrast() {
    ToggleOffAll();
    var element = document.body;
    element.classList.toggle("contrast-mode");
    localStorage.setItem("style", "contrast");
    document.getElementById("contrast-style-button").classList.add('active');
}

//wyłącznie stylów
function ToggleOffAll() {
    
    let element = document.body;
    //jeżeli dany styl ma swoj odnosnik w "ciele" to wyłączamy go
    if (element.classList.contains("custom-mode")) {
        element.classList.toggle("custom-mode");
        document.getElementById("custom-style-button").classList.remove('active');
    }
    if (element.classList.contains("dark-mode")) {
        element.classList.toggle("dark-mode");
        document.getElementById("dark-style-button").classList.remove('active');
    }
    if (element.classList.contains("contrast-mode")) {
        element.classList.toggle("contrast-mode");
        document.getElementById("contrast-style-button").classList.remove('active');
    }
}

