let myAnswerInput = document.getElementById('InputOne');
let myAnswerButton = document.getElementById('answerButtonOne');
let myAnswerFeedbackElement = document.getElementById('answerFeedbackOne');

// Function to show message in the feedback element
function showMessage(myMessage){
    myAnswerFeedbackElement.innerHTML = `<p>${myMessage}</p>`;
}

myAnswerButton.addEventListener('click', (event) => {
    event.preventDefault(); // prevents page reload
    console.warn('opgave 1 og 2');

    let tal = myAnswerInput.value; // get user input

    switch (tal) {
        case "1":
            showMessage("Du har valgt: (1)");
            break;
        case "2":
            showMessage("Du har valgt: (2)");
            break;
        case "3":
            showMessage("Du har valgt: (3)");
            break;
        case "4":
            showMessage("Du har valgt: (4)");
            break;
        case "5":
            showMessage("Du har valgt: (5)");
            break;
        default:
            showMessage("Skriv et tal mellem 1 og 5!");
    }
});

/* skriv evt en view funktion der viser om svaret er korrekt i myAnsverFeedbackElement, brug evt. innerHTML*/



// opgave 3 og 4
 myAnsverInput = document.getElementById('answerTwo');
 myAnsverButton = document.getElementById('answerButtonTwo');

 myAnsverFeedbackElement = document.getElementById('answerFeedbackTwo');

function showMessage(myMessage){
    myAnswerFeedbackElement.innerHTML = `<p>${myMessage}</p>`;
}


 myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 3 og 4');
     let number = myAnswerInput.value; // get user input

    switch (number) {
        case "1":
            showMessage("Du har valgt: (1)");
            break;
        case "2":
            showMessage("Du har valgt: (2)");
            break;
        case "3":
            showMessage("Du har valgt: (3)");
            break;
        case "4":
            showMessage("Du har valgt: (4)");
            break;
        case "5":
            showMessage("Du har valgt: (5)");
            break;
        default:
            showMessage("Skriv et tal mellem 1 og 12!");
    }
});

    


/* din view function her */


// opgave 5
myAnsverInput = document.getElementById('InputFive');
myAnsverButton = document.getElementById('answerButtonFive');

myAnsverFeedbackElement = document.getElementById('answerFeedbackFive');

myAnsverButton.addEventListener('click', (event) => {
   event.preventDefault();

   console.warn('opgave 5');

   workDays(myAnsverInput.value)
  
});


 /* din kode her.*/



/* din view function her */


