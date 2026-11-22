function calculateTotal(){
  let people = document.getElementById("people").value;
  let total = people * 100;
  document.getElementById("total").textContent = "M" + total + "0.00";

}

document.getElementById("bookingForm").addElelementListener("submit", function(event){
event.preventDefault();

let destination = document.getElementById("book")
})

function submitForm(){
  alert("Booking Successful!")
}