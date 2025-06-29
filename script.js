// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true },
        { "titulo": "Rayuela", "autor": "Julio Cortázar", "genero": "Ficción experimental", "disponible": false },
        { "titulo": "El principito", "autor": "Antoine de Saint-Exupéry", "genero": "Fábula", "disponible": true },
        { "titulo": "Fahrenheit 451", "autor": "Ray Bradbury", "genero": "Ciencia ficción", "disponible": true },
        { "titulo": "La sombra del viento", "autor": "Carlos Ruiz Zafón", "genero": "Misterio", "disponible": false },
        { "titulo": "Don Quijote de la Mancha", "autor": "Miguel de Cervantes", "genero": "Novela clásica", "disponible": true },
        { "titulo": "Crónica de una muerte anunciada", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "Orgullo y prejuicio", "autor": "Jane Austen", "genero": "Romance", "disponible": false },
        { "titulo": "La metamorfosis", "autor": "Franz Kafka", "genero": "Existencialismo", "disponible": true },
        { "titulo": "It", "autor": "Stephen King", "genero": "Terror", "disponible": false },
        { "titulo": "Sapiens: De animales a dioses", "autor": "Yuval Noah Harari", "genero": "Ensayo histórico", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback, biblioteca) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
};

function lecturaJSON(objetoJSON) {
    console.log("Inventario de libros:");
    objetoJSON.libros.forEach((libro, index) => {
        console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
    });
};

//Agregar libros
function agregarLibro(objeto, callback) { //Callback = leerDatos
    biblioteca.libros.push(objeto);
    setTimeout(() => {
        console.log("Actualización");
        //lecturaJSON(biblioteca);
    }, 1000);
};

//Actualizar disponibilidad
function actualizarDisponibilidad(titulo, nuevoEstado) {
    setTimeout(() => {
        const libro = biblioteca.libros.find(l => l.titulo === titulo);

        if (libro) {
            console.log(`Libro: ${titulo}, Disponibilidad actual: ${libro.disponible ? 'Disponible' : 'Prestado'}`);
            libro.disponible = nuevoEstado; // actualizar disponibilidad
            console.log(`→ Disponibilidad actualizada: ${libro.disponible ? 'Disponible' : 'Prestado'}`);
            //lecturaJSON(biblioteca); // mostrar el inventario actualizado
        } else {
            console.log("Libro no encontrado");
        }
    }, 1000);
}


const prueba = { "titulo": "Dummy", "autor": "Dummy", "genero": "Dummy", "disponible": true };

agregarLibro(prueba, leerDatos);
leerDatos(lecturaJSON, biblioteca);
//console.log(biblioteca.libros[4].titulo)
actualizarDisponibilidad("1984", false)