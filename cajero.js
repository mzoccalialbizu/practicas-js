
class Cajero {
    di
    constructor(dinero) {
        this.di = dinero
    }
    extraerDinero(extraccionDinero, usuario) {
        if (usuario.cc >= extraccionDinero && this.di >= extraccionDinero) {
            usuario.cc = usuario.cc - extraccionDinero
            this.di = this.di - extraccionDinero
            usuario.efectivo = usuario.efectivo + extraccionDinero
            console.log('ok')
            return extraccionDinero
        } else {
            if (this.di <= extraccionDinero) {
                console.log('el cajero no tiene suficiente dinero')
                return
            }
            console.log('el usuario ' + usuario.nombre + ' no tiene dinero ' + dineroAExtraer)
            return
        }
    }

}

class Usuario {
    nombre
    efectivo
    cc

    constructor(nombre, cc, efectivo) {
        this.nombre = nombre
        this.cc = cc
        this.efectivo = efectivo
    }

    consultarSaldo() {
        return cc
    }
}


usuario = new Usuario('Jose', 20, 0)
cajero1 = new Cajero(1000)
dineroAExtraer = 100
cajero1.extraerDinero(dineroAExtraer, usuario)




