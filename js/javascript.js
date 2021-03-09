var nombre = prompt("Hola, es un gusto conocerte mi nombre es Alarm, serias tan amable de ingresar tu nombre.")
var hora = prompt("porfavor, ingresa la hora y te dire cual es tu tarea")

var despertador = function(hr) {
    if(hr <= 5) {
        return `<h1><span>${nombre}</span> tu descanso aun no termina, segui en la cama porfavor </h1>`
    }else if(hr >= 6 && hr <=9) {
        return `${nombre} buenos dias, ya podes despertar y empezar con tu primera actividad del dia ENTRENAR`
    }else if (hr >= 9 && hr <=10){
        return `${nombre} es hora de desayunar,`
    }else if (hr >= 10 && hr <= 13) {
        return `${nombre}, estas en horario de trabajo, no podes moverte de tu lugar`
    }else if (hr >= 13 && hr <= 14) {
        return `${nombre}, hora de almorzar`
    }else if (hr >= 14 && hr <= 18) {
        return `${nombre} relajate es hora de estar con Emma 17`
    }else if (hr >= 19 && hr <= 21) {
        return `${nombre}, es un buen momento para cenar`
    }else if (hr >= 21 && hr <= 23) {
        return `${nombre}, mirate una serie`
    }else {
        return `Por que carajos estas despierta, si es hora de dormir`
    }
}
document.write(despertador(hora))