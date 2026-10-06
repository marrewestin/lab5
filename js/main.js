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

    } else {
        console.log(fullnameInput.value.trim());
    };

    if (email.value.trim() === "") {
        console.log("E-postadress är obligatorisk.");
        errors.push("E-postadress är obligatorisk.");

    } else {
        console.log(emailInput.value.trim());
    }

    if (phone.value === "") {
        console.log("Telefonnummer är obligatoriskt.");
        errors.push("Telefonnummer är obligatoriskt.");

    } else {
        console.log(phoneInput.value.trim());
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

    // Uppdatera studentkortet

    // Lägg till studentkortet i historiken

    // Spara och uppdatera historiken
}


/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
    // Spara history i localStorage
}


/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik

    // Uppdatera history
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
        createStudentCard();
        console.log("Studentkort skapas");
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