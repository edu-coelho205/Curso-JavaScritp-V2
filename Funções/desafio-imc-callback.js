(function(){
    function calcularImc(peso,altura,cb){
        if(peso===undefined ||  altura===undefined){
            throw Error("Need two parameters: weight and height")
        }
        let imc=peso/(altura**2)
        if(typeof cb === "function"){
            return cb(imc)
        }
        return imc.toFixed(2)   
    }
    ;
    function mostrarImc(imc){
        if(imc <=16.9){
            return `Muito Abaixo do peso! ${imc.toFixed(2)}`
        } else if(imc <=18.4){
            return `Abaixo do peso! ${imc.toFixed(2)}`
        } else if(imc <=24.9){
            return `Peso Normal! ${imc.toFixed(2)}`
        } else if(imc <=29.9){
            return `Acima do peso! ${imc.toFixed(2)}`
        } else if(imc <=34.9){
            return `Obesidade grau I! ${imc.toFixed(2)}`
        } else if(imc <=40){
            return `Obesidade grau II! ${imc.toFixed(2)}`
        } else {
            return `Obesidade grau III! ${imc.toFixed(2)}`
        }
    }
    console.log(calcularImc(70,1.78,mostrarImc))
})()