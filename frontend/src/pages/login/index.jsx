import { Input, Button, Checkbox, InputGroup } from 'rsuite';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { IconEye, IconEyeOff } from '@tabler/icons-react';


function Login(){


    const [isLoggin, setIsLoggin] = useState(false);
    const [userInfo, setUserInfo] = useState();
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    //Gsap
    gsap.registerPlugin(useGSAP);
    const tl = gsap.timeline({repeat:-1, repeatDelay: 1});
    const backgroundAnimation = () => {
        tl.to('#box01', { x : '-10rem', duration: 5 }, '>');
        tl.to('#box02', { x : '-20rem', duration: 5 }, '>');
        tl.to('#box01', { x : '10rem', duration: 5 }, '>');
        tl.to('#box02', { x : '5rem', duration: 5 }, '>');
        tl.to('#box01', { y : '10rem', duration: 5 }, '>');
        tl.to('#box02', { y : '-20rem', duration: 5 }, '>');
        tl.to('#box01', { y : '-10rem', duration: 5 }, '>');
        tl.to('#box02', { y : '5rem', duration: 5 }, '>');
    }
    const handleUserInfo = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        })
    }

    //Rive
    const STATE_MACHINE_NAME = 'State Machine 1';
    const INPUT_NAME_ERROR = 'Error';
    const INPUT_NAME_SUCCESS = 'Success';

    const { rive, RiveComponent } = useRive({
        src: "/Flag_Animation.riv",
        autoplay : true,
        stateMachines: STATE_MACHINE_NAME,
        onLoad: () => console.log("Rive file loaded successfully"),
        onError: (error) => console.error("Error loading Rive file:", error)
    });
    const errorAnimation = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME_ERROR);
    const successAnimation = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME_SUCCESS);

    const handleChange = () => {
        setVisible(!visible);
    };
    const navigateAccount = (e) => {
        e.preventDefault();
        navigate('recuperar-cuenta');
    }
    useGSAP(()=>{
        backgroundAnimation();
    }, []);


    const handleLogin = async() => {
        //logic to login
    }   

    return(
        <div className='w-full h-full flex justify-center items-center relative'>
            <div className='w-[90%] h-[70%] absolute inset-x-0 inset-y-0 m-auto'>
                <RiveComponent/>
            </div>
        <div className="absolute top-0 -z-10 h-full w-full bg-[#F2FFE9] overflow-hidden">
            <div id ='box01' className="absolute bottom-auto left-auto right-0 top-0 h-[1000px] w-[1000px] -translate-x-[-10rem] translate-y-[-10rem] rounded-full bg-[#06D001] opacity-50 blur-[200px]"></div>  
            <div id ='box02' className="absolute bottom-auto left-auto left-0 top-1/2 h-[1000px] w-[1000px] -translate-x-[5rem] translate-y-[5rem] rounded-full bg-[#9BEC00] opacity-50 blur-[200px]"></div>  
        </div>
        <div id='box-form' className="bg-white w-[350px] rounded-lg drop-shadow-md flex items-center flex-col p-5 dark:text-white">
            <h2 className='font-Catalish text-5xl'>ADvenir</h2>
            <form onChange={handleUserInfo} action="submit" className='w-full h-full flex gap-1 flex-col mt-10'>
                <h1 className='text-green-500 text-xl self-center'>Iniciar sesión</h1>
                <p className='text-zinc-500 ml-5'>Nombre</p>
                <Input name='userName' className='rounded-full h-10'/>
                <p className='text-zinc-500 ml-5 mt-2'>Contraseña</p>
                <InputGroup className='rounded-full h-10'>
                    <Input name='password' className='!rounded-full' type={visible ? 'text' : 'password'} />
                        <InputGroup.Button className='!rounded-r-full' onClick={handleChange}>
                            {visible ? <IconEye /> : <IconEyeOff />}
                        </InputGroup.Button>
                    </InputGroup>
                <a className='text-green-500 hover:decoration-green-600 hover:text-green-600 cursor-pointer ml-5' onClick={(e) => navigateAccount(e)}>Olvidaste tu contraseña?</a>
                <Checkbox color='green' >Recordar usuario</Checkbox>
                
                <Button onClick={()=> successAnimation.value = !successAnimation.value} className='mt-auto w-full rounded-full h-12 text-2xl font-Catalish' appearance='primary' color='green'>Entrar</Button>
            </form>
        </div>
        </div>
    )
}

export default Login