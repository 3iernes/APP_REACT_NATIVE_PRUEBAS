
import { useState } from 'react';
import { Input, Button } from '@rneui/themed';
import { createUser } from '../api/pruebasAPI';
import { validateSignUP } from '../utilities/formsValidations';

export default function SignupForm() {
    const [values, setValues] = useState({
        'user': null,
        'password': null,
        'confirmPassword': null
    })
    const [errores, setErrores] = useState({
        'user': null,
        'password': null,
        'confirmPassword': null
    })
    const handlePress = async () => {
        try {
            const [errors,correct] = validateSignUP(values)
            setErrores(errors)
            if(correct){
                //Si estan todos los datos bien, genero el hash del password
                /*const response = await createUser(values)
                if(response.status === 200){
                    //Registro exitoso
                }*/
            }
            console.log(errors,correct)
        } catch (error) {
            console.log(`Error posteando datos usuario: ${error.message}`)
        }
    }
    return (
        <>
            <Input
                placeholder='Usuario'
                onChangeText={value => setValues({
                    ...values,
                    'user': value
                })} 
                errorMessage={errores.user}/>
            <Input
                placeholder='Contraseña'
                secureTextEntry={true}
                onChangeText={value => setValues({
                    ...values,
                    'password': value
                })}
                errorMessage={errores.password} />
            <Input
                placeholder='Confirmar contraseña'
                secureTextEntry={true}
                onChangeText={value => setValues({
                    ...values,
                    'confirmPassword': value
                })}
                errorMessage={errores.confirmPassword} />
            <Button title="Solid Button" onPress={handlePress} />
        </>
    )
}