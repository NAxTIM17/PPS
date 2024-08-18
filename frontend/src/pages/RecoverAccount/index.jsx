import { useState } from "react";
import AuthForm from "../../components/Forms/Auth"
import TextInput from "../../components/TextInput"
import { useNavigate } from 'react-router-dom';

const RecoverAccount = () => {
	const [isSend, setIsSend] = useState(false);
	const navigate = useNavigate();


    return(
        <>
            <AuthForm
                title={isSend ? "Email enviado" : "Recuperar Cuenta"} 
                buttonText={isSend ? "" : "Recuperar"} 
                onSubmit={(event, endSubmitting) => {
                event.preventDefault();
                //this is where the handsome logic to generate token needs to be.
                setTimeout(()=>{
                    setIsSend(true);
					// navigate('/login');
                },5000)
            }}>
                {
                    isSend ? 
                    <div className="text-center w-80 text-xl m-auto">
                    Se ha enviado un correo de recuperación a tu dirección de correo electrónico. Por favor, revisa tu bandeja de entrada y la carpeta de spam.
                    </div>
                     : <TextInput
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Ingrese su email"
                    required
                />
                }
            
            </AuthForm>
        </>
    )
};

export default RecoverAccount;
