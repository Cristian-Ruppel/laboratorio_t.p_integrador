document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    const table = document.querySelector('table tbody');

    function updateTable() {
        const formData = new FormData(form);
        const rows = table.querySelectorAll('tr');
        
        let i = 0;
        formData.forEach((value, key) => {
            const row = rows[i];
            const cell = row.querySelector('td:last-child');
            cell.textContent = value;
            i++;
        });
    }

    form.addEventListener('input', updateTable);
    updateTable();

    function mostrarCV() {
        const cvCompleto = document.getElementById('cv-completo');
        const cvAbrir = document.getElementById('cv-abrir');
        const boton = document.getElementById('leer-mas');
        
        cvCompleto.style.display = 'block';
        cvAbrir.style.display = 'none';
        
        boton.textContent = "Leer menos";
        boton.setAttribute('onclick', 'ocultarCV()');
    }

    function ocultarCV() {
        const cvCompleto = document.getElementById('cv-completo');
        const cvAbrir = document.getElementById('cv-abrir');
        const boton = document.getElementById('leer-mas');
        
        cvCompleto.style.display = 'none';
        cvAbrir.style.display = 'block';
        
        boton.textContent = "Leer más";
        boton.setAttribute('onclick', 'mostrarCV()');
    }

    document.getElementById('cv-completo').style.display = 'none';

});
