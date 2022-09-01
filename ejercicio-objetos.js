// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const my_info = {
    nombre: "Tomas",
    apellido: "Justel",
    edad: 23,
    altura: 1.79,
    isDeveloper: true,
}

// - Una variable que obtenga tu edad a partir del objeto anterior
console.log(my_info.edad)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const infoFriends = [
    {nombre: "Tomas", apellido: "Justel", edad: 23, altura: 1.79, isDeveloper: true},
    {nombre: "Agustin", apellido: "Justel", edad: 22, altura: 1.79, isDeveloper: false},
    {nombre: "Nicolas", apellido: "Leda", edad: 24, altura: 1.68, isDeveloper: false},
]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
infoFriends.sort ((a, b) => b.edad - a.edad)



