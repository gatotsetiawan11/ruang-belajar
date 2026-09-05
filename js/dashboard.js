document.addEventListener("DOMContentLoaded", () => {


    const token =
    localStorage.getItem("student_token");


    const studentName =
    localStorage.getItem("student_name");



    if(!token){

        window.location.href="index.html";

        return;

    }




    // ==========================
    // PROFIL
    // ==========================


    document.getElementById("greet")
    .textContent =
    `Halo, ${studentName}!`;


    document.getElementById("kelasBadge")
    .textContent =
    "Siswa";




    // ==========================
    // DATA KELAS
    // ==========================


    const classes = [
        1,
        2,
        3,
        4,
        5,
        6
    ];



    const classList =
    document.getElementById("classList");



    classList.innerHTML = "";



    classes.forEach(kelas=>{


        const card =
        document.createElement("div");


        card.className =
        "class-card";



        card.innerHTML = `

            <div class="class-icon">
                📚
            </div>

            <h3>
                Kelas ${kelas}
            </h3>

            <p>
                Materi dan latihan
            </p>

        `;



        card.addEventListener("click",()=>{


            if(kelas === 3){

                showMapel();

            }

            else{

                alert(
                "Materi kelas ini belum tersedia"
                );

            }


        });



        classList.appendChild(card);



    });





    // ==========================
    // MAPEL KELAS 3
    // ==========================


    function showMapel(){


        const mapelSection =
        document.getElementById(
            "mapelSection"
        );


        const mapelList =
        document.getElementById(
            "mapelList"
        );



        const mapel = [

            "Pendidikan Pancasila",

            "Bahasa Indonesia",

            "Matematika",

            "IPAS",

            "Bahasa Inggris"

        ];



        mapelList.innerHTML="";



        mapel.forEach(subject=>{


            const card =
            document.createElement("div");



            card.className =
            "mapel-card";



            card.innerHTML = `

                <div class="mapel-icon">
                    📖
                </div>

                <h3>
                    ${subject}
                </h3>

                <p>
                    Kelas 3
                </p>

            `;



            card.addEventListener("click",()=>{


                alert(
                    subject +
                    " dipilih"
                );


            });



            mapelList.appendChild(card);


        });



        mapelSection.hidden=false;



        mapelSection
        .scrollIntoView({
            behavior:"smooth"
        });



    }





    // ==========================
    // LOGOUT
    // ==========================


    document.getElementById("logoutBtn")
    .addEventListener("click",()=>{


        localStorage.clear();

        window.location.href=
        "index.html";


    });



});
