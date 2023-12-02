function actualizarReloj() {
  const fecha = document.getElementById("fecha");
  const reloj = document.getElementById("reloj");
  const fechaActual = new Date();
  let hora = fechaActual.getHours();
  let minutos = fechaActual.getMinutes();
  let segundos = fechaActual.getSeconds();
  let periodo = "AM";

  if (hora === 0) {
    hora = 12;
  } else if (hora > 12) {
    periodo = "PM";
    hora = hora - 12;
  }

  const horaCompleta = `${hora} : ${minutos} : ${segundos} ${periodo}`;

  if (fecha) {
    fecha.innerText = `${fechaActual.getDate()} / ${fechaActual.getMonth()} / ${fechaActual.getFullYear()}`;
  }
  if (reloj) {
    reloj.innerText = horaCompleta;
  }

  setTimeout(actualizarReloj, 1000);
}

actualizarReloj();
