let productos = [
    {
        nombre: "arroz",
        id: 1,
        categoria: "alimento",
        precio: 200
    },
    {
        nombre: "harina",
        id: 20,
        categoria: "alimento",
        precio: 150
    },
    {
        nombre: "lavandina",
        id: 14,
        categoria: "limpieza",
        precio: 250
    },
    {
        nombre: "fideos",
        id: 56,
        categoria: "alimento",
        precio: 100
    },
    {
        nombre: "jabon",
        id: 89,
        categoria: "limpieza",
        precio: 130
    },
    {
        nombre: "desodorante de ambiente",
        id: 3,
        categoria: "limpieza",
        precio: 220
    },
    {
        nombre: "gaseosa",
        id: 67,
        categoria: "bebidas",
        precio: 300
    },
    {
        nombre: "agua",
        id: 56,
        categoria: "bebidas",
        precio: 170
    },
    {
        nombre: "polenta",
        id: 13,
        categoria: "alimento",
        precio: 180
    }
]

let carrito = []

    
function bienvenida() {
    let compra = Number(prompt("Bienvenido a la tienda!\n¿Qué desea ver?\n1- Todos los productos\n2-Productos mas baratos\n3-Buscar por categorias\n4-Buscar por nombre\n0-Salir"))
    do {
        
        if (compra === 1) {
            listProductos()
        } else if (compra === 2) {
           preciosMin()
        } else if (compra === 3) {
            categorias()
        }
        
    } while (compra === 0);
}

function listProductos(disponibles) {
    disponibles = "Productos disponibles\n Producto - Precio\n"
    productos.forEach(element => {
        disponibles = disponibles +  element.id + " - " + element.nombre + " " + element.precio + "$" + "\n"
    });
    let todosDisponibles = Number(prompt(disponibles))
    
}
function preciosBaratos(productos) {
    productos.sort((a, b) => a.precio - b.precio)
            baratos = "Productos mas baratos"
            productos.forEach(element => {
                baratos = baratos + "\n" + element.id + "- " + element.nombre + " " + element.precio
            })
            let masBaratos = Number(prompt(baratos))
}

function preciosMin() {
    productos.sort((a, b) => a.precio - b.precio)
    baratos = "Productos mas baratos"
    productos.forEach(element => {
        baratos = baratos + "\n" + element.id + " - " + element.nombre + " " + element.precio
    })
    let masBaratos = Number(prompt(baratos))
   do {
    if (masBaratos === 56) {
        let productoSeleccionado = productos.find(prod => prod.id === masBaratos)
        carrito.push({
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio
        })
        console.log(carrito)
    } 
   } while (masBaratos === 0);
}

function categorias(productos) {
    
}

bienvenida()



