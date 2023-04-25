var countDownDate = new Date("Dec 31, 2023 00:00:00").getTime();
var x = setInterval(() => {
 var now = new Date().getTime();
 var distance = countDownDate - now
 
 const days = Math.floor(distance / (1000 * 60 * 60 * 24))
 const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
 const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
 const seconds = Math.floor((distance % (1000 * 60)) / 1000)

 document.querySelector(".days").innerHTML = days
 document.querySelector(".hours").innerHTML = hours
 document.querySelector(".minutes").innerHTML = minutes
 document.querySelector(".seconds").innerHTML = seconds

 if (distance < 0) {
    clearInterval()
    document.querySelector(".days").innerHTML = "00"
    document.querySelector(".hours").innerHTML = "00"
    document.querySelector(".minutes").innerHTML = "00"
    document.querySelector(".seconds").innerHTML = "00" 
 }
}, 1000);

const inputEmail = document.querySelector(".input_email")
const learnBtn = document.querySelector(".learn_btn")
const errorMsg = document.querySelector(".error_msg")
const successMsg = document.querySelector(".success_msg")

emailNotice = []

learnBtn.addEventListener("click", function() {
    if (inputEmail.value === "") {
        errorMsg.textContent = "Please provide an email"
    } else {
        errorMsg.textContent = ""
        successMsg.textContent = "Thank you for providing your email, we will get you notified when we are back"
        emailNotice.push(inputEmail.value)
        localStorage.setItem("emailNotice", JSON.stringify(emailNotice))
        
        inputEmail.value = ""
        console.log(retrievedEmail)
    }
    
})
const retrievedEmail = JSON.parse(localStorage.getItem("emailNotice"))
console.log(retrievedEmail)


if (retrievedEmail) {
    emailNotice = retrievedEmail
}


