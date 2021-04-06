class Hotel {
    habitaciones = []
    nombre
    constructor(nombre, habitaciones) {

        this.habitaciones = habitaciones
        this.nombre = nombre

    }

    reservar(cliente) {

        
        this.habitaciones.forEach(habitacion => {
            if (habitacion.ocupacion && habitacion.camas >= cliente.cantidadPersonas && cliente.reservacion.length === 0) {
                habitacion.ocupacion = false
                cliente.reservacion.push(habitacion)
                console.log(cliente.reservacion)
            }
            else { console.log('no hay habitaciones disponibles') }
        })

    }



}



class Habitaciones {
    ocupacion
    valor
    camas
    constructor(ocupacion, valor, camas) {

        this.ocupacion = ocupacion
        this.valor = valor
        this.camas = camas
    }
}

class Cliente {

    nombre
    dinero
    reservacion
    cantidadPersonas
    constructor(nombre, dinero, reservacion, cantidadPersonas) {

        this.nombre = nombre
        this.dinero = dinero
        this.reservacion = reservacion
        this.cantidadPersonas = cantidadPersonas
    }

}
tuvieja = new Hotel('tuvieja', [
    new Habitaciones(true, 10, 2),
    new Habitaciones(true, 20, 4),
    new Habitaciones(true, 40, 4),
    new Habitaciones(true, 50, 6)
])

carlos = new Cliente('carlos', 70, [], 3)
jose = new Cliente('jose', 1000, [], 1)
tuvieja.reservar(carlos)
tuvieja.reservar(jose)