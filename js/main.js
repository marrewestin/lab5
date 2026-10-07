"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: MARIA WESTIN
 */

// Hämta element från DOM
const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");


// Array som används för felmeddelanden
let errors = [];

// Array som innehåller sparade studentkort
let history = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {
    errors = []; // Rensa tidigare felmeddelanden

    // Kontrollera formulärets obligatoriska fält
    if (fullname.value.trim() === "") {
        console.log("Fullständigt namn är obligatoriskt.");
        errors.push("Fullständigt namn är obligatoriskt.");
    }

    if (email.value.trim() === "") {
        console.log("E-postadress är obligatorisk.");
        errors.push("E-postadress är obligatorisk.");
    }

    if (phone.value.trim() === "") {
        console.log("Telefonnummer är obligatoriskt.");
        errors.push("Telefonnummer är obligatoriskt.");
    };

    // Visa eventuella felmeddelanden
    displayErrors();

    // Returnera resultatet (true eller false) av valideringen
    if (errors.length === 0) {
        console.log("Formuläret är korrekt ifyllt.");
        return true;
    } else {
        console.log("Formuläret innehåller fel.");
        return false;
    }
}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
    // Rensa tidigare felmeddelanden
    errorList.innerHTML = "";
    // Skriv ut aktuella felmeddelanden till DOM
    errors.forEach((error) => {
        const li = document.createElement("li");
        li.textContent = error;
        errorList.appendChild(li);
    });
}

/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {
    // Hämta information från formuläret
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const font = fontSelect.value;
    console.log(fullname);
    console.log(email);
    console.log(phone);

    // Uppdatera studentkortet
    previewFullname.textContent = fullname;
    previewEmail.textContent = email;
    previewPhone.textContent = phone;
    previewFullname.style.fontFamily = font;
    previewEmail.style.fontFamily = font;
    previewPhone.style.fontFamily = font;

    // Lägg till studentkortet i historiken
    saveHistory(fullname, email, phone, font);
    //const studentCard = { fullname, email, phone, font };
    //history.unshift(studentCard); // Lägg till i början av arrayen
    // Spara och uppdatera historiken
     //history.forEach((card) => {
       // console.log(card);
    //}); 
}

/**
 * Sparar historiken i localStorage.
 */
function saveHistory(fullname, email, phone, font) {
    // Spara history i localStorage
   /*  history.forEach((card) => {
        const historyJSON = JSON.stringify(history);
        localStorage.setItem("studentHistory", historyJSON);
    }) */
    const studentCard = {
        fullname: fullname,
        email: email,
        phone: phone,
        font: font
    };
    console.log(studentCard);
    history.unshift(studentCard); // Lägg till i början av arrayen
    // Spara studentkortet i localStorage
    localStorage.setItem("studentCard", JSON.stringify(history));
}

/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik
    /* const savedHistory = localStorage.getItem("studentHistory");

    if (savedHistory) {
        // Uppdatera history med sparad historik
        history = JSON.parse(savedHistory);
    } */
}

/**
 * Visar historiken på sidan.
 */
function renderHistory() {
    // Rensa tidigare visad historik

    // Skriv ut innehållet i history till DOM
}

/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
    // Återställ formulär och studentkort
    fullname.value = "";
    email.value = "";
    phone.value = "";
    font.value = "Georgia";
    // Rensa eventuella felmeddelanden
    errorList.innerHTML = "";
}

/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik

    // Uppdatera history och visningen på sidan
}

// Eventlyssnare
form.addEventListener("submit", (event) => {
    // När formuläret skickas:
    event.preventDefault();
    // - validera inmatningen
    console.log("Formuläret skickas");
    if (validateForm()) {
        // - skapa studentkort om valideringen lyckas
        console.log("Studentkort skapas");
        createStudentCard();
    };
});


// När användaren klickar på "Rensa"
clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    clearForm();
});

// När användaren klickar på "Radera historik"


// När sidan laddas:
// - läs in och visa eventuell tidigare historik