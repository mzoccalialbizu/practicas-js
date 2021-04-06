class Kiosko {
    store
    precios
    constructor(store, precios) {
        this.store = store
        this.precios = precios

    }

    vender(producto, cliente, cantidad) {
        let a = cliente.dinero //100
        let b = this.store[producto] // 50
        let c = this.store[producto] // 10
        if (this.store[producto] >= cantidad) {
            //  multiplicar cantidad por c nos va a dar el precioTotal de los productos.
            let precioTotal = cantidad * c
            // corroborar si al cliente le alcanza la plata
            if (a >= precioTotal) {
                // en caso de que pueda, dar vuelto, 
                if (cliente.mochilaLlena()) {
                    cliente.mochila.espacio.push({ nombre: producto, cantidad: cantidad })
                    a = a - precioTotal
                    console.log('gracias por su compra')
                }
                else { console.log('toma una bolsita') }
            }
            else { console.log('no te alcanza pobre') }
        }
        else {
            cconsole.log('no tenemnos ' + producto)
        }
    }
}
class Cliente {
    nombre
    dinero
    mochila
    constructor(nombre, dinero, mochila) {
        this.dinero = dinero
        this.mochila = mochila
        this.nombre = nombre
    }
    mochilaLlena = () => {
        console.log(this.mochila.espacio.length <= this.mochila.limite)
        return this.mochila.espacio.length <= this.mochila.limite

    }

}


carlos = new Cliente('carlos', 1000, {
    billetera: 0,
    espacio: [],
    limite: 5
})
kiosko = new Kiosko(
    {
        'alfajores': 50,
        'caramelos': 1,
        'agua': 80
    },
    {
        'alfajores': 10,
        'caramelos': 0,
        'agua': 100
    }
)


for (let i = 0; i < 7; i++) {
    kiosko.vender('alfajores', carlos, 5)
}

console.log(carlos.mochila.espacio[0].nombre + ' ' + carlos.mochila.espacio[0].cantidad)