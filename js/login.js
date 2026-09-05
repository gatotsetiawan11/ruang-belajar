document.addEventListener("DOMContentLoaded", () => {


const loginForm = document.getElementById("loginForm");

const identityType = document.getElementById("identityType");

const identityInput = document.getElementById("identityInput");

const pinInput = document.getElementById("pinInput");

const identityLabel = document.getElementById("identityLabel");

const loginMessage = document.getElementById("loginMessage");



// ubah label sesuai pilihan

identityType.addEventListener("change", () => {


    const type = identityType.value;


    if(type === "nisn"){

        identityLabel.textContent = "NISN";

        identityInput.placeholder = "Masukkan NISN";

    }


    else if(type === "email"){

        identityLabel.textContent = "Email";

        identityInput.placeholder = "Masukkan Email";

    }


    else if(type === "whatsapp"){

        identityLabel.textContent = "WhatsApp";

        identityInput.placeholder = "Masukkan Nomor WhatsApp";

    }


});




// submit login

loginForm.addEventListener("submit", async(e)=>{


e.preventDefault();


const identity = identityInput.value.trim();

const pin = pinInput.value.trim();



if(!identity || !pin){

    showMessage("Data belum lengkap");

    return;

}



console.log({
    identity,
    pin
});



showMessage("Mengecek akun...");



});





function showMessage(message){

    loginMessage.hidden = false;

    loginMessage.textContent = message;

}



});
