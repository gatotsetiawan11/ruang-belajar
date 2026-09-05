document.addEventListener("DOMContentLoaded", () => {



    const studentId =
    localStorage.getItem("student_id");


    const studentName =
    localStorage.getItem("student_name");


    const token =
    localStorage.getItem("student_token");



    // cek login

    if(!token || !studentId){

        window.location.href =
        "index.html";

        return;

    }





    // tampilkan nama

    document.getElementById("greet")
    .textContent =
    `Halo, ${studentName}!`;





    // sementara

    document.getElementById("kelasBadge")
    .textContent =
    "Siswa";





    // statistik sementara

    document.getElementById("statLulus")
    .textContent = "0";


    document.getElementById("statActive")
    .textContent = "0";


    document.getElementById("statTotal")
    .textContent = "0";





    // pesan bab kosong

    document.getElementById("chapterList")
    .innerHTML = `

        <p class="empty">

        Belum ada materi tersedia.

        </p>

    `;






    // logout

    document.getElementById("logoutBtn")
    .addEventListener("click", async()=>{


        // hapus data login

        localStorage.removeItem(
            "student_token"
        );


        localStorage.removeItem(
            "student_id"
        );


        localStorage.removeItem(
            "student_name"
        );



        window.location.href =
        "index.html";


    });



});
