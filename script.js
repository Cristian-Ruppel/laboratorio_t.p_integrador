document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    const table = document.querySelector('table tbody');

    if (form && table) {
        function updateTable() {
            const formData = new FormData(form);
            const rows = table.querySelectorAll('tr');

            let i = 0;
            formData.forEach((value, key) => {
                const row = rows[i];
                const cell = row.querySelector('td:last-child');
                if (cell) {
                    cell.textContent = value;
                }
                i++;
            });
        }

        form.addEventListener('input', updateTable);
        updateTable();
    }

    function mostrarCV() {
        const cvCompleto = document.getElementById('cv-completo');
        const cvAbrir = document.getElementById('cv-abrir');
        const boton = document.getElementById('leer-mas');
        
        if (cvCompleto && cvAbrir && boton) {
            cvCompleto.style.display = 'block';
            cvAbrir.style.display = 'none';

            boton.textContent = "Leer menos";
            boton.removeEventListener('click', mostrarCV);
            boton.addEventListener('click', ocultarCV);
        }
    }

    function ocultarCV() {
        const cvCompleto = document.getElementById('cv-completo');
        const cvAbrir = document.getElementById('cv-abrir');
        const boton = document.getElementById('leer-mas');
        
        if (cvCompleto && cvAbrir && boton) {
            cvCompleto.style.display = 'none';
            cvAbrir.style.display = 'block';

            boton.textContent = "Leer más";
            boton.removeEventListener('click', ocultarCV);
            boton.addEventListener('click', mostrarCV);
        }
    }

    const cvCompleto = document.getElementById('cv-completo');
    if (cvCompleto) {
        cvCompleto.style.display = 'none';
    }

    const botonLeerMas = document.getElementById('leer-mas');
    if (botonLeerMas) {
        botonLeerMas.addEventListener('click', mostrarCV);
    }

    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { 
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
