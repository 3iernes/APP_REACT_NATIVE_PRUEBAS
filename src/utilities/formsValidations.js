export const validateSignUP = (obj) => {
    let errors = {
        ...errors,
        'user': null,
        'password': null,
        'confirmPassword': null
    }
    let allow = true
    //Veo si el nombre de usuario cumple con el minimo de 4 caracteres
    if (obj.user === null) {
        allow = false
        errors = {
            ...errors,
            'user': 'El nombre de usuario debe tener minimo 4 caracteres',
        }
    }
    //Veo si ingreso las contraseñas
    if (obj.password === null) {
        allow = false
        errors = {
            ...errors,
            'password': 'Este es un campo obligatorio',
        }
    } 
    if(obj.confirmPassword === null){
        allow = false
        errors = {
            ...errors,
            'confirmPassword': 'Este es un campo obligatorio',
        }
    }
    if (!(obj.password === obj.confirmPassword)) {
        //Si ingreso algo, veo si puso bien el pass las 2 veces
        allow = false
        //Si lo puso mal, le muestro un msj de error
        errors = {
            ...errors,
            'password': 'Los valores ingresados no son iguales',
            'confirmPassword': 'Los valores ingresados no son iguales',
        }
    }
    console.log(obj.confirmPassword)
    return [errors, allow]
}