
function calculateTotal() {
    let people = document.getElementById("people").value;
    let total = people * 100;
    document.getElementById("total").innerHTML = "M" + total + ".00";
}

function checkContact() {
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let error = document.getElementById("formError");

    if (name == "" || email == "" || phone == "") {
        error.innerHTML = "Please fill in all fields.";
        return false;
    }
    if (email.includes("@") == false) {
        error.innerHTML = "Please enter a valid email with @";
        return false;
    }
    if (isNaN(phone)) {
        error.innerHTML = "Phone must be numbers only.";
        return false;
    }

    error.innerHTML = "";
    localStorage.setItem("username", name);
    document.getElementById("formResult").innerHTML =
        "Thank you " + name + "! Your message has been sent.";
    return false;
}

function checkBooking() {
    let place = document.getElementById("destination").value;
    let people = document.getElementById("people").value;
    if (place == "") {
        alert("Please choose a destination.");
        return false;
    }
    document.getElementById("bookingResult").innerHTML =
        "Booking saved! " + place + " for " + people + " people.";
    return false;
}

function changeMode() {
    document.body.classList.toggle("dark");
}

function searchPlace() {
    let word = document.getElementById("searchBox").value.toLowerCase();
    let boxes = document.querySelectorAll(".search-item");
    boxes.forEach(function(box) {
        if (box.innerText.toLowerCase().includes(word)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
}

window.onload = function() {
    let saved = localStorage.getItem("username");
    let welcome = document.getElementById("welcomeBack");
    if (saved && welcome) {
        welcome.innerHTML = "Welcome back, " + saved + "!";
    }
}