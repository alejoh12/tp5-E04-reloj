/*
4- Crear una web con un reloj que muestre la siguiente información:
*/

function encontrarHora() {
    let now = new Date();
    let horas = now.getHours();
    let minutos = now.getMinutes();
    let segundos = now.getSeconds();
   
    var horaActual = `${horas}:${minutos}:${segundos}`;

    document.getElementById("reloj").innerText = horaActual;
  }

  function encontrarFecha() {
    let hoy = new Date();
    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let anio = hoy.getFullYear();
    let nombreDia;
    let nombreMes;

    switch(dia) {
        case 1:
            nombreMes = "Enero";
            break;
        case 2:
            nombreMes = "Febrero";
            break;
        case 3:
            nombreMes = "Marzo";
            break;
        case 4:
            nombreMes = "Abril";
            break;
        case 5:
            nombreMes = "Mayo";
            break;
        case 6:
            nombreMes = "Junio";
            break;
        case 7:
            nombreMes = "Julio";
            break;
        case 8:
            nombreMes = "Agosto";
            break;
        case 9:
            nombreMes = "Septiembre";
            break;
        case 10:
            nombreMes = "Octubre";
            break;
        case 11:
            nombreMes = "Noviembre";
            break;
        default:
            nombreMes = "Diciembre";
            break;
    }
    
    let fecha = `${dia} de ${nombreMes} del ${anio}`;

    document.getElementById("fecha").innerText = fecha;
  }
  
  setInterval(encontrarHora, 1000);

  setInterval(encontrarFecha, 1000);
  
  encontrarFecha();
  
  encontrarHora();