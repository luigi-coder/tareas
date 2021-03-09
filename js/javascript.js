var nombre = prompt("Hola, es un gusto conocerte mi nombre es Alarm, serias tan amable de ingresar tu nombre.")
var hora = prompt("porfavor, ingresa la hora y te dire cual es tu tarea")

var despertador = function(hr) {
    if(hr <= 5) {
        return `<h1><span>${nombre}</span> tu descanso aun no termina, segui en la cama porfavor </h1>`
    }else if(hr >= 6 && hr <=9) {
        return `<h1><span>${nombre}</span> buenos dias, ya podes despertar y empezar con tu primera actividad del dia ENTRENAR</h1>`
    }else if (hr >= 9 && hr <=10){
        return `<h1><span>${nombre}</span> es hora de desayunar</h1>`
    }else if (hr >= 10 && hr <= 13) {
        return `<h1><span>${nombre}</span> estas en horario de trabajo, no podes moverte de tu lugar</h1>`
    }else if (hr >= 13 && hr <= 14) {
        return `<h1><span>${nombre}</span> hora de almorzar</h1>`
    }else if (hr >= 14 && hr <= 18) {
        return `<h1><span>${nombre}</span> relajate es hora de estar con Emma 17</h1>`
    }else if (hr >= 19 && hr <= 21) {
        return `<h1><span>${nombre}</span> es un buen momento para cenar</h1>`
    }else if (hr >= 21 && hr <= 23) {
        return `<h1><span>${nombre}</span> mirate una serie</h1>`
    }else {
        return `<h1><span>Por que carajos estas despierta, si es hora de dormir</h1>`
    }
}
document.write(despertador(hora))