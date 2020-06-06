// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
};


function obtenerAutos(){
    return [
            {
                marca: 'BMW',
                modelo: 'Serie 3',
                year: 2012,
                precio: 30000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
            {
                marca: 'Ford',
                modelo: 'Mustang',
                year: 2015,
                precio: 20000,
                puertas: 2,
                color: 'Blanco',
                transmision: 'automatico'
            },
            { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
            {
                marca: 'BMW',
                modelo: 'Serie 5',
                year: 2016,
                precio: 70000,
                puertas: 4,
                color: 'Rojo',
                transmision: 'automatico'
            },
            {
                marca: 'Mercedes Benz',
                modelo: 'Clase C',
                year: 2015,
                precio: 25000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            {
                marca: 'Chevrolet',
                modelo: 'Camaro',
                year: 2018,
                precio: 60000,
                puertas: 2,
                color: 'Rojo',
                transmision: 'manual'
            },
            { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
            {
                marca: 'Dodge',
                modelo: 'Challenger',
                year: 2017,
                precio: 40000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
            {
                marca: 'Dodge',
                modelo: 'Challenger',
                year: 2012,
                precio: 25000,
                puertas: 2,
                color: 'Rojo',
                transmision: 'manual'
            },
            {
                marca: 'Mercedes Benz',
                modelo: 'Clase C',
                year: 2018,
                precio: 45000,
                puertas: 4,
                color: 'Azul',
                transmision: 'automatico'
            },
            {
                marca: 'BMW',
                modelo: 'Serie 5',
                year: 2019,
                precio: 90000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
            {
                marca: 'Dodge',
                modelo: 'Challenger',
                year: 2015,
                precio: 35000,
                puertas: 2,
                color: 'Azul',
                transmision: 'automatico'
            },
            {
                marca: 'BMW',
                modelo: 'Serie 3',
                year: 2018,
                precio: 50000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            {
                marca: 'BMW',
                modelo: 'Serie 5',
                year: 2017,
                precio: 80000,
                puertas: 4,
                color: 'Negro',
                transmision: 'automatico'
            },
            {
                marca: 'Mercedes Benz',
                modelo: 'Clase C',
                year: 2018,
                precio: 40000,
                puertas: 4,
                color: 'Blanco',
                transmision: 'automatico'
            },
            { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
        ]
        
    
};

//Datos para la busqueda
let datosBusqueda = {
    marca:'',
    year: '',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
};

//EventListener DOM Loaded
const autos = obtenerAutos();
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

});

//Event listener para el formulario
const marca = document.querySelector('#marca');
marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;

    //Mandar llamar a la funcion filtrar autos

    filtraAutos();
})



function mostrarAutos(autos){
    //Leer el elemento resutlado
    const contenedor = document.querySelector('#resultado');
    
    
    autos.forEach(auto => {
            const autoHTML = document.createElement('p');
            autoHTML.innerHTML = `
                <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmision: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
            `;
            contenedor.appendChild(autoHTML);
    });
};

function filtraAutos(){
    console.log('hola')
}

