window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.custom-navbar');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
const consultaForm = document.getElementById('consultaForm');

if (consultaForm) {
    consultaForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const tipoConsulta = document.getElementById('tipoConsulta').value;
        const mensaje = document.getElementById('mensaje').value;

        const numeroWhatsApp = '2664579329';

        const texto = `Hola, quisiera realizar una consulta legal.%0A%0A` +
            `Nombre: ${nombre}%0A` +
            `Teléfono: ${telefono}%0A` +
            `Email: ${email}%0A` +
            `Tipo de consulta: ${tipoConsulta}%0A` +
            `Mensaje: ${mensaje}`;

        const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

        window.open(url, '_blank');
    });
}