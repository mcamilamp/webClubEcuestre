document.addEventListener("DOMContentLoaded", function () {
  const rolSelect = document.getElementById("rolSelect");
  const accederBtn = document.getElementById("accederBtn");

  accederBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const selectedValue = rolSelect.value;
    let redirectUrl = "";

    switch (selectedValue) {
      case "admin":
        redirectUrl = "inicioAdmin.html";
        break;
      case "socio":
        redirectUrl = "inicioSocio.html";
        break;
      case "public":
        redirectUrl = "inicioPublic.html";
        break;
      default:
        alert("Por favor, seleccione un rol válido.");
        return;
    }
    window.location.href = redirectUrl;
  });
});
