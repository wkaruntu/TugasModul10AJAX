document.getElementById("kirimButton").addEventListener("click", function () {
    const nama = document.getElementById("nama").value.trim();
    const responseMessage = document.getElementById("responseMessage");
  
    setTimeout(() => {
      if (nama) {
        responseMessage.style.color = "green";
        responseMessage.textContent = `Halo, ${nama} selamat datang di AJAX!`;
      } else {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Nama tidak boleh kosong.";
      }
    }, true);
  });