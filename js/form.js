var link = document.querySelector(".button-js");
var popup = document.querySelector(".for-modal-fixed");
var modalClose = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var eMail = popup.querySelector("[name=eMail]");
var textLetter = popup.querySelector("[name=textLetter]");
var form = popup.querySelector(".comment-form");
var loginLabel = popup.querySelector(".noValidLogin");
var emailLabel = popup.querySelector(".noValidEmail");
var textLetterLabel = popup.querySelector(".noValidTextletter");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popup.classList.contains("modal")) {
        popup.classList.remove("modal");
        popup.classList.add("modalAnimation");
        login.focus();
    }
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!popup.classList.contains("modal")) {
        popup.classList.add("modal");
        loginLabel.classList.remove("noValid");
        emailLabel.classList.remove("noValid");
        textLetterLabel.classList.remove("noValid");
        document.getElementById('clearLogin').value = "";
        document.getElementById('clearEmail').value = "";
        document.getElementById('clearTextletter').value = "";
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (!popup.classList.contains("modal")) {
            popup.classList.add("modal");
            loginLabel.classList.remove("noValid");
            emailLabel.classList.remove("noValid");
            textLetterLabel.classList.remove("noValid");
            document.getElementById('clearLogin').value = "";
            document.getElementById('clearEmail').value = "";
            document.getElementById('clearTextletter').value = "";
      }
    }
  });

form.addEventListener("submit", function (evt) {
    if (!login.value) {
        evt.preventDefault();
        loginLabel.classList.add("noValid");
        loginLabel.focus();
        if (emailLabel.classList.contains("noValid")) {
            emailLabel.classList.remove("noValid");
        }
        if (textLetterLabel.classList.contains("noValid")) {
            textLetterLabel.classList.remove("noValid");
        }
    } else if (!eMail.value) {
        evt.preventDefault();
        emailLabel.classList.add("noValid");
        emailLabel.focus();
        loginLabel.classList.remove("noValid");
        if (loginLabel.classList.contains("noValid")) {
            loginLabel.classList.remove("noValid");
        }
        if (textLetterLabel.classList.contains("noValid")) {
            textLetterLabel.classList.remove("noValid");
        }
    } else if (!textLetter.value) {
        evt.preventDefault();
        textLetterLabel.classList.add("noValid");
        textLetterLabel.focus();
        emailLabel.classList.remove("noValid");
        if (loginLabel.classList.contains("noValid")) {
            loginLabel.classList.remove("noValid");
        }
        if (emailLabel.classList.contains("noValid")) {
            emailLabel.classList.remove("noValid");
        }
    }
    if (login.value && eMail.value && textLetter.value) {
        loginLabel.classList.remove("noValid");
        emailLabel.classList.remove("noValid");
        textLetterLabel.classList.remove("noValid");
    }
  });















