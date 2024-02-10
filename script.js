const form = document.getElementById("sign-up-form");
const gmailInput = document.getElementById("gmail-input");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", (e) => {
  let gmail = gmailInput.value;
  e.preventDefault();
  if (!gmail || !isNaN(gmail) || !gmail.match("@") || !gmail.match(".com")) {
    errorMessage.style.display = "block";
    gmailInput.classList.add("error");
  } else {
    gmailInput.classList.remove("error");
    document.body.innerHTML = `<div class='success-message'> 
    <img src="./assets/images/icon-list.svg" alt="">
    <h1> Thanks for subscribing!</h1>
    <p>
        A confirmation email has been sent to <strong>${gmail}</strong> .Please open it and click the button inside to confirm your subscription.
    </p>
    <button id='dismiss-btn'>Dismiss message</button>
    </div>`;
  }
});
