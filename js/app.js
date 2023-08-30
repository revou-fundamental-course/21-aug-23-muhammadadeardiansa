// Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Validasi
isiForm();
//deklarasi variable

function isiForm() {
  let nama = document.getElementById("nama");
  let alamat = document.getElementById("alamat");
  let gender = document.getElementsByName("jenis_kelamin");
  let selectGen = "";
  let pesan = document.getElementById("pesan");
  let peringatan1 = document.getElementById("peringatan1");
  let peringatan2 = document.getElementById("peringatan2");
  let peringatan3 = document.getElementById("peringatan3");
  let peringatan4 = document.getElementById("peringatan4");
  let klik = document.getElementById("klik");

  klik.addEventListener("click", function (event) {
    event.preventDefault();
    // Validation for Nama (Name)
    if (nama.value === "") {
      peringatan1.innerHTML = "Nama harus diisi";
    }

    // Validation for Alamat (Address)
    if (alamat.value === "") {
      peringatan2.innerHTML = "Alamat harus diisi";
    }

    // Validation for Pesan (Message)
    if (pesan.value === "") {
      peringatan4.innerHTML = "Pesan harus diisi";
    }

    // Validation for Jenis Kelamin (Gender)
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        genValue = true;
        selectGen = gender[i].value;
        break;
      }
    }
    if (!genValue) {
      peringatan3.innerHTML = "Jenis Kelamin harus dipilih";
    }

    let pNama = document.getElementById("p-nama");
    let pAlamat = document.getElementById("p-alamat");
    let pGender = document.getElementById("p-gender");
    let pPesan = document.getElementById("p-pesan");

    pNama.innerHTML = "Nama : " + nama.value;
    pAlamat.innerHTML = "Alamat :" + alamat.value;
    pGender.innerHTML = "Gender :" + selectGen;
    pPesan.innerHTML = "Pesan :" + pesan.value;
  });
}
