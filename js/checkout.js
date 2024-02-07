const myCart = JSON.parse (localStorage.getItem ("myCart"))

myCart.forEach(element => {
    document.getElementById("cart").innerHTML += `
     <li><a href="#">${(element.name).slice(12) + '...'} <span class="middle">x${element.quantity}</span> <span class="last">${element.price * element.quantity} VND</span></a></li>  
    `
}); 

function validateForm() {
    var nameInput = document.getElementById("nameInput");
    var diachiInput = document.getElementById("diachiInput");
    var dienThoaiInput = document.getElementById("dienThoaiInput");
    var emailInput = document.getElementById("emailInput");
    var nameError = document.getElementById("nameError");
    var diachiError = document.getElementById("diachiError");
    var dienThoaiError = document.getElementById("dienThoaiError");
    var emailError = document.getElementById("emailError");
    var isValid = true;

    if (nameInput.value.trim() === "") {
        nameError.innerHTML = "Vui lòng điền vào họ tên.";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }

    if (diachiInput.value.trim() === "") {
        diachiError.innerHTML = "Vui lòng điền vào địa chỉ.";
        isValid = false;
    } else {
        diachiError.innerHTML = "";
    }

    if (dienThoaiInput.value === "") {
        dienThoaiError.innerHTML = "Vui lòng điền vào số điện thoại.";
        isValid = false;
    } else {
        dienThoaiError.innerHTML = "";
    }

    if (emailInput.value === "") {
        emailError.innerHTML = "Vui lòng điền vào email.";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }
    if (isValid == true) {
        window.location = 'thank.html';
    }
}