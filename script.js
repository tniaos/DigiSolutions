function mostrarGuardado(btn) {
  const original = btn.textContent;
  btn.textContent = 'Guardado';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
  }, 1200);
}

function registrarNombre() {
  const btn = event.target;
  mostrarGuardado(btn);
}

function registrarApellido() {
  const btn = event.target;
  mostrarGuardado(btn);
}

function registrarIDHuella() {
  const btn = event.target;
  mostrarGuardado(btn);

}
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach((seccion) => seccion.style.display = "none");
  const activa = document.getElementById(id);
  if (activa) activa.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarSeccion("home");
});