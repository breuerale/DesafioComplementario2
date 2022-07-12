//Desafio Incorporar arrays
//Usar alguna de las propiedades vistas en clase,hacer un array de objetos.



class Club {
    constructor(id, nombre, creacion, liga, campeonatos) {
        this.id = id
        this.nombre = nombre
        this.creacion = creacion
        this.liga = liga
        this.campeonatos = campeonatos
    }
}

const river = new Club(1, "River Plate", 1901, "Liga Argentina", 69)
const realmadrid = new Club(2,"Real Madrid", 1902, "La Liga", 95)
const liverpool = new Club(3, "Liverpool", 1892, "Premier League", 70)
const milan = new Club(4,"Milan", 1899, "Calcio", 52)

const clubes = [river, realmadrid, liverpool, milan]

alert("Consulte si su club se encuentra entre los 4 de nuestra base de datos")
consulta = prompt("Ingrese club que desea buscar")


for(let x = 0; x < clubes.length; x++){
    if(clubes[x].nombre.includes(consulta) == true) {
        alert("Esta en nuestra base de datos")
        alert(`Le brindamos la informacion disponible de ${clubes[x].nombre} `)
        alert(`Año de Fundacion ${clubes[x].creacion} `)
        alert(`Liga en la que juega ${clubes[x].liga}`)
        alert(`Titulos Totales : ${clubes[x].campeonatos}`)
        
        
    }
    /*else { Si lo hago asi  se repite que no lo encuentra por cada ciclo.
        alert("No se encuentra en la base de datos")
    }*/
}

//Agrego un nuevo club y muestro por consola los objetos.
clubes.push(psg = new Club (5, "Psg", 1900, "Eridivisie", 50))
console.log(clubes)















