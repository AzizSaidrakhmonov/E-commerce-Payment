"use strict"

// MAIN BUTTON CONST
const mainButton = document.querySelector(".main-btn");

// MODALS CONST
const makePayment = document.querySelector(".make-payment__modal-wrapper");
const confirmPayment = document.querySelector(".confirm-payment__modal-wrapper");
const successPayment = document.querySelector(".success-payment__modal-wrapper");

//GO TO BUTTONS CONST
const goToConfirmModal = document.querySelector(".going-to__confirm-modal");
const goToSuccessModal = document.querySelector(".going-to__success-modal");
const goToMainWindow = document.querySelector(".going-to__main-window");

// BACK TO BUTTONS CONST
const makePaymentBackButton = document.querySelector(".make-payment__back-btn");
const confirmPaymentBackButton = document.querySelector(".confirm-payment__back-btn");
const successPaymentBackButton = document.querySelector(".success-payment__back-btn");

// CLOSE BUTTONS CONST
const makePaymentCloseButton = document.querySelector(".make-payment__close-btn");
const confirmPaymentCloseButton = document.querySelector(".confirm-payment__close-btn");
const successPaymentCloseButton = document.querySelector(".success-payment__close-btn");

// STEPS CONST
const makeStep1 = document.querySelector(".make-payment__step-1");

const confirmStep1 = document.querySelector(".confirm-payment__step-1");
const confirmStep2 = document.querySelector(".confirm-payment__step-2");

const successStep1 = document.querySelector(".success-payment__step-1");
const successStep2 = document.querySelector(".success-payment__step-2");
const successStep3 = document.querySelector(".success-payment__step-3");



/////////////////////////////////// MAIN BUTTON /////////////////////////////////////

mainButton.addEventListener("click", function(){
    makePayment.classList.add("active");
    makeStep1.style.background = "#40bfff";
})



/////////////////////////////////// VALIDATION //////////////////////////////////////

//FIRSTNAME
const firstName = document.querySelector(".firstname");

firstName.addEventListener("keyup", function(){
    var firstNameValid = document.querySelector(".firstname-valid__feedback");
    var firstNameInvalid = document.querySelector(".firstname-invalid__feedback");
    let res = /^[a-zA-Z]+$/;

    if(res.test(firstName.value) && firstName.value.length >=3 && firstName.value.length < 30 && firstName.value.match(/[-!$%^&*()_+|~=`{}\[\]:";<> \\?,.\/0-9]/) == null) {
        firstNameInvalid.style.opacity = "0";
        firstNameValid.style.opacity = "1";
        firstName.style.outline = "1px solid green";
    } else {
        firstNameInvalid.style.opacity = "1";
        firstNameValid.style.opacity = "0";
        firstName.style.outline = "1px solid red";
    }
})


//LASTNAME
const lastName = document.querySelector(".lastname");

lastName.addEventListener("keyup", function(){
    var lastNameValid = document.querySelector(".lastname-valid__feedback");
    var lastNameInvalid = document.querySelector(".lastname-invalid__feedback");

    let res = /^[a-zA-Z]+$/;

    if(res.test(lastName.value) && lastName.value.length >=3 && lastName.value.length < 30 && lastName.value.match(/[-!$%^&*()_+|~=`{}\[\]:";<> \\?,.\/0-9]/) == null) {
        lastNameInvalid.style.opacity = "0";
        lastNameValid.style.opacity = "1";
        lastName.style.outline = "1px solid green";
    } else {
        lastNameInvalid.style.opacity = "1";
        lastNameValid.style.opacity = "0";
        lastName.style.outline = "1px solid red";
    }
})


//EMAIL
const email = document.querySelector(".email");

email.addEventListener("keyup", function(){
    var emailValid = document.querySelector(".email-valid__feedback");
    var emailInvalid = document.querySelector(".email-invalid__feedback");

    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.match(regExp)){
        emailInvalid.style.opacity = "0";
        emailValid.style.opacity = "1";
        email.style.outline = "1px solid green";
    } else {
        emailInvalid.style.opacity = "1";
        emailValid.style.opacity = "0";
        email.style.outline = "1px solid red";
    }

})


//ADDRESS
const address = document.querySelector(".address");

address.addEventListener("keyup", function(){
    var addressValid = document.querySelector(".address-valid__feedback");
    var addressInvalid = document.querySelector(".address-invalid__feedback");

    let res = /^[a-zA-Z0-9, ]+$/;

    if(res.test(address.value) && address.value.length >=3 && address.value.length < 100 && lastName.value.match(/[-!$%^&*()_+|~=`{}\[\]:";<>\\?.\/]/) == null) {
        addressInvalid.style.opacity = "0";
        addressValid.style.opacity = "1";
        address.style.outline = "1px solid green";
    } else {
        addressInvalid.style.opacity = "1";
        addressValid.style.opacity = "0";
        address.style.outline = "1px solid red";
    }
})


//PHONE NUMBER

const phoneNumber = document.querySelector(".phone-number");


phoneNumber.addEventListener("keyup", function(){
    var phoneValid = document.querySelector(".phone-valid__feedback");
    var phoneInvalid = document.querySelector(".phone-invalid__feedback");

    if( phoneNumber.value.match(/[0-9]/gi).length == 12 ) {
        phoneInvalid.style.opacity = "0";
        phoneValid.style.opacity = "1";
        phoneNumber.style.outline = "1px solid green";
    } else {
        phoneInvalid.style.opacity = "1";
        phoneValid.style.opacity = "0";
        phoneNumber.style.outline = "1px solid red";
    }
})


const cardNumber = document.querySelector(".card-number");

cardNumber.addEventListener("keyup", function(){
    var cardValid = document.querySelector(".card-valid__feedback");
    var cardInvalid = document.querySelector(".card-invalid__feedback");

    if( cardNumber.value.match(/[0-9]/gi).length == 16 ) {
        cardInvalid.style.opacity = "0";
        cardValid.style.opacity = "1";
        cardNumber.style.outline = "1px solid green";
    } else {
        cardInvalid.style.opacity = "1";
        cardValid.style.opacity = "0";
        cardNumber.style.outline = "1px solid red";
    }
})

const expirationDate = document.querySelector(".expiration-date");

expirationDate.addEventListener("keyup", function(){
    var expirationValid = document.querySelector(".expiration-valid__feedback");
    var expirationInvalid = document.querySelector(".expiration-invalid__feedback");

    if( expirationDate.value.match(/[0-9]/gi).length == 4 ) {
        expirationInvalid.style.opacity = "0";
        expirationValid.style.opacity = "1";
        expirationDate.style.outline = "1px solid green";
    } else {
        expirationInvalid.style.opacity = "1";
        expirationValid.style.opacity = "0";
        expirationDate.style.outline = "1px solid red";
    }
})

const cvv = document.querySelector(".cvv");

cvv.addEventListener("keyup", function(){
    var cvvValid = document.querySelector(".cvv-valid__feedback");
    var cvvInvalid = document.querySelector(".cvv-invalid__feedback");

    if( cvv.value.match(/[0-9]/gi).length == 4 ) {
        cvvInvalid.style.opacity = "0";
        cvvValid.style.opacity = "1";
        cvv.style.outline = "1px solid green";
    } else {
        cvvInvalid.style.opacity = "1";
        cvvValid.style.opacity = "0";
        cvv.style.outline = "1px solid red";
    }
})

const holderNumber = document.querySelector(".holder-number");

holderNumber.addEventListener("keyup", function(){
    var holderValid = document.querySelector(".holder-valid__feedback");
    var holderInvalid = document.querySelector(".holder-invalid__feedback");

    if( holderNumber.value.match(/[0-9]/gi).length == 16 ) {
        holderInvalid.style.opacity = "0";
        holderValid.style.opacity = "1";
        holderNumber.style.outline = "1px solid green";
    } else {
        holderInvalid.style.opacity = "1";
        holderValid.style.opacity = "0";
        holderNumber.style.outline = "1px solid red";
    }
})


///////////////////////////////////// GO TO BUTTON ///////////////////////////////////

goToConfirmModal.addEventListener("click", function(){

            makePayment.classList.remove("active");
            confirmPayment.classList.add("active");
            confirmStep1.style.background = "#40bfff";
            confirmStep2.style.background = "#40bfff";    
})


goToSuccessModal.addEventListener("click", function(){
    confirmPayment.classList.remove("active");
    successPayment.classList.add("active");
    successStep1.style.background = "#40bfff";
    successStep2.style.background = "#40bfff";
    successStep3.style.background = "#40bfff";
})

goToMainWindow.addEventListener("click", function(){
    successPayment.classList.remove("active");
    window.location.reload();
})


////////////////////////////////////// BACK TO BUTTON ////////////////////////////////

makePaymentBackButton.addEventListener("click", function(){
    makePayment.classList.remove("active");
})

confirmPaymentBackButton.addEventListener("click", function(){
    confirmPayment.classList.remove("active");
    makePayment.classList.add("active");
})

successPaymentBackButton.addEventListener("click", function(){
    successPayment.classList.remove("active")
    confirmPayment.classList.add("active");
})


//////////////////////////////////// CLOSE MODAL BUTTON /////////////////////////////////////

makePaymentCloseButton.addEventListener("click", function(){
    makePayment.classList.remove("active");
})

confirmPaymentCloseButton.addEventListener("click", function(){
    confirmPayment.classList.remove("active");

})

successPaymentCloseButton.addEventListener("click", function(){
    successPayment.classList.remove("active");
})



