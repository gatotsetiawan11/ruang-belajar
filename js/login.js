document.addEventListener("DOMContentLoaded", () => {


    // ==============================
    // ELEMENT HTML
    // ==============================

    const loginForm = document.getElementById("loginForm");

    const identityType = document.getElementById("identityType");

    const identityInput = document.getElementById("identityInput");

    const pinInput = document.getElementById("pinInput");

    const identityLabel = document.getElementById("identityLabel");

    const loginMessage = document.getElementById("loginMessage");



    // ==============================
    // UBAH INPUT SESUAI IDENTITAS
    // ==============================

    identityType.addEventListener("change", () => {


        const type = identityType.value;


        switch(type){


            case "nisn":

                identityLabel.textContent = "NISN";

                identityInput.placeholder =
                "Masukkan NISN";

                break;



            case "email":

                identityLabel.textContent = "Email";

                identityInput.placeholder =
                "Masukkan Email";

                break;



            case "whatsapp":

                identityLabel.textContent = "WhatsApp";

                identityInput.placeholder =
                "Masukkan Nomor WhatsApp";

                break;


        }


    });




    // ==============================
    // LOGIN SUBMIT
    // ==============================

    loginForm.addEventListener("submit", async(e)=>{


        e.preventDefault();



        const identity =
        identityInput.value.trim();


        const pin =
        pinInput.value.trim();



        if(!identity || !pin){

            showMessage(
                "Lengkapi data terlebih dahulu"
            );

            return;

        }



        showMessage(
            "Memeriksa akun..."
        );



        try{


            let column;



            // menentukan pencarian

            if(identityType.value === "nisn"){

                column = "nisn";

            }

            else if(identityType.value === "email"){

                column = "email";

            }

            else {

                column = "whatsapp";

            }





            // ==============================
            // AMBIL DATA SISWA
            // ==============================


            const { data: student, error } = await window.db

            .from("students")

            .select("*")

            .eq(column, identity)

            .single();



            console.log(
                "DATA SISWA:",
                student
            );


            console.log(
                "ERROR:",
                error
            );




            if(error || !student){


                showMessage(
                    "Akun tidak ditemukan"
                );


                return;

            }





            // ==============================
            // CEK PIN
            // ==============================


            const pinHash =
            await hashPin(pin);



            console.log(
                "PIN HASH:",
                pinHash
            );



            if(pinHash !== student.pin_hash){


                showMessage(
                    "PIN salah"
                );


                return;

            }





            // ==============================
            // BUAT SESSION LOGIN
            // ==============================


            const token =
            crypto.randomUUID();



            const expired =
            new Date(
                Date.now()
                +
                (24 * 60 * 60 * 1000)
            );



            const { error: sessionError } =
            await window.db

            .from("sessions")

            .insert({

                student_id: student.id,

                token: token,

                expires_at: expired

            });





            if(sessionError){


                console.error(
                    sessionError
                );


                showMessage(
                    "Gagal membuat sesi"
                );


                return;

            }





            // ==============================
            // SIMPAN LOGIN
            // ==============================


            localStorage.setItem(
                "student_token",
                token
            );


            localStorage.setItem(
                "student_id",
                student.id
            );


            localStorage.setItem(
                "student_name",
                student.nama
            );





            showMessage(
                "Login berhasil"
            );



            setTimeout(()=>{


                window.location.href =
                "dashboard.html";


            },1000);




        }

        catch(err){


            console.error(err);


            showMessage(
                "Terjadi kesalahan sistem"
            );


        }



    });






    // ==============================
    // TAMPILKAN PESAN
    // ==============================

    function showMessage(text){


        loginMessage.hidden = false;


        loginMessage.textContent =
        text;


    }



});





// ==================================
// HASH PIN SHA-256
// ==================================

async function hashPin(pin){


    const encoder =
    new TextEncoder();


    const data =
    encoder.encode(pin);



    const hashBuffer =
    await crypto.subtle.digest(
        "SHA-256",
        data
    );



    const hashArray =
    Array.from(
        new Uint8Array(hashBuffer)
    );



    return hashArray

    .map(
        b =>
        b.toString(16)
        .padStart(2,"0")
    )

    .join("");

}
