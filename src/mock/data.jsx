import Item from "../components/Item"

 export const productos = [
    {
        id: '1',
        name: 'Play 5',
        stock: 10,
        price: 700,
        description: 'Consola para juegos fisicos y digitales',
        img: '../play5.jpg',
        category: 'ofertas'
    },
    {
        
        name: 'Xbox',
        stock: 15,
        price: 580,
        description: 'Xbox es una marca de videojuegos creada por y propiedad de Microsoft que incluye una serie de videoconsolas desarrolladas por la misma compañía',
        img: '../xbox.jpg',
        category: 'nuevos'
    },
    {
        
        name: 'Fifa 2024',
        stock: 22,
        price: 135,
        description: 'Futbol',
        img: '../Fifa24.jpg',
        category: 'juegos'
    },
    {
        
        name: 'Batleflied',
        stock: 30,
        price: 110,
        description: 'Accion',
        img: '../Batleflied.jpg',
        category: 'juegos'
    },
    {
        
        name: 'Play 5 Digital',
        stock: 8,
        price: 580,
        description: 'Edición Digital es una versión totalmente digital de la consola PS5, sin unidad de disco vaya a PlayStation™Store para comprar y descargar juegos.',
        img: '../play5Dig.jpg',
        category: 'ofertas'
    },
    {
        
        name: 'Jostick PS5',
        stock: 10,
        price: 105,
        description: 'Jostick inalambrico solo para PS5',
        img: '../jostick.jpg',
        category: 'ofertas'
    },
    {
        
        name: 'Godofwar',
        stock: 15,
        price: 80,
        description: 'Accion y aventura',
        img: '../godofwar.jpg',
        category: 'nuevos'
    },
    {
        
        name: 'Call of duty',
        stock: 22,
        price: 120,
        description: 'Accion',
        img: '../Callofduty.jpg',
        category: 'juegos'
    },
    {
        
        name: 'matchpoint tennis champions',
        stock: 30,
        price: 180,
        description: 'Deportes',
        img: '../matchpoin.jpg',
        category: 'juegos'
    },
    {
        
        name: 'Jumanji',
        stock: 12,
        price: 90,
        description: 'Aventura',
        img: '../Jumanji.jpg',
        category: 'juegos'
    },
]


export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un error, intente mas tarde')
            } else {
                resolve(productos)
            }
        }, 3000)
    })
}

//Opcion sencilla
//export const getOneProduct = ()=>{
//   let error=false
// return new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     if(!error){
//       resolve(productos[1])
// }else{
//   reject('No hay data')
//           }
//      },3000)
//  }) 
//}

//Opcion dinamica

export const getOneProduct = (id) => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                let product = productos.find((item)=> item.id === id) 
                resolve(product)
            } else {
                reject('No hay data')
            }
        }, 3000)
    })
}