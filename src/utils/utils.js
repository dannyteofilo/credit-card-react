import Swal from "sweetalert2";

export function messageAlert({ type, title, text, textButton, timer, html }) {
  Swal.fire({
    icon: type ? type : "",
    title: title ? title : "",
    text: text ? text : "",
    html: html ? html : "",
    confirmButtonText: textButton ? textButton : "Aceptar",
    timer: timer ? timer : 3000,
  });
}
