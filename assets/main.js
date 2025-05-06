function cekPasangan(event) {
  event.preventDefault();
  let nama = document.getElementById("search").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  if (nama === "") {
    alert("Masukkan nama terlebih dahulu!");
  } else {
    const randomStatus = Math.floor(Math.random() * status.length);
    if (randomStatus === 0) {
      let pasanganLakiLaki = [
        "Budi",
        "Agus",
        "Rizky",
        "Dimas",
        "Andi",
        "Fajar",
        "Aji",
      ];
      let pasanganPerempuan = [
        "Sari",
        "Dewi",
        "Intan",
        "Rina",
        "Lestari",
        "Putri",
        "Anin",
        "Ayumi",
        "Relin",
        "Aurel",
      ];
      let pasangan = gender === "male" ? pasanganPerempuan : pasanganLakiLaki;
      const random = Math.floor(Math.random() * pasangan.length);
      document.getElementById(
        "result"
      ).innerHTML = `${nama.toUpperCase()} - Pasangan Kamu : ${
        pasangan[random]
      }`;
      document.getElementById("search").value = "";
    } else {
      document.getElementById(
        "result"
      ).innerHTML = `${nama.toUpperCase()} - KOSONG`;
      document.getElementById("search").value = "";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-search").addEventListener("click", cekPasangan);
});
