import { Input, InputGroup } from 'rsuite';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { AuthService } from '../../services/Auth';
import { useAuth } from '../../providers/Auth';

function Login() {
	const [isAttemptingLogin, setIsAttemptingLogin] = useState(false);
	const [userInfo, setUserInfo] = useState();
	const [passwordInputType, setPasswordInputType] = useState('password');
	const navigate = useNavigate();

	////Gsap
	gsap.registerPlugin(useGSAP);
	const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
	const backgroundAnimation = () => {
		tl.to('#box01', { x: '-10rem', duration: 5 }, '>');
		tl.to('#box02', { x: '-20rem', duration: 5 }, '>');
		tl.to('#box01', { x: '10rem', duration: 5 }, '>');
		tl.to('#box02', { x: '5rem', duration: 5 }, '>');
		tl.to('#box01', { y: '10rem', duration: 5 }, '>');
		tl.to('#box02', { y: '-20rem', duration: 5 }, '>');
		tl.to('#box01', { y: '-10rem', duration: 5 }, '>');
		tl.to('#box02', { y: '5rem', duration: 5 }, '>');
	};
	useGSAP(() => {
		backgroundAnimation();
	}, []);
	//

	const handleUserInfo = (e) => {
		setUserInfo((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	//Rive
	const STATE_MACHINE_NAME = 'State Machine 1';
	const INPUT_NAME_ERROR = 'Error';
	const INPUT_NAME_SUCCESS = 'Success';

	const { rive, RiveComponent } = useRive({
		src: '/Flag_Animation.riv',
		autoplay: true,
		stateMachines: STATE_MACHINE_NAME,
		onLoad: () => console.log('Rive file loaded successfully'),
		onError: (error) => console.error('Error loading Rive file:', error),
	});
	const errorAnimation = useStateMachineInput(
		rive,
		STATE_MACHINE_NAME,
		INPUT_NAME_ERROR
	);
	const successAnimation = useStateMachineInput(
		rive,
		STATE_MACHINE_NAME,
		INPUT_NAME_SUCCESS
	);

	const auth = useAuth();

	const handleLogin = async (event) => {
		event.preventDefault();

		setIsAttemptingLogin(true);
		successAnimation.value = errorAnimation.value = false;

		AuthService.login(userInfo)
			.then(() => {
				if (successAnimation) {
					successAnimation.value = true;
				}

				auth?.action?.initSessionWithoutUser();
				navigate('/');
			})
			.catch(() => {
				if (errorAnimation) {
					errorAnimation.value = true;
				}
			})
			.finally(() => {
				setIsAttemptingLogin(false);
			});
	};

	return (
		<div className="w-full min-h-screen grid place-items-center relative">
			<div className="w-[90%] h-[70%] absolute inset-x-0 inset-y-0 m-auto">
				<RiveComponent />
			</div>
			<div className="absolute top-0 -z-10 h-full w-full bg-[#F2FFE9] rounded-lg overflow-hidden">
				<div
					id="box01"
					className="absolute bottom-auto left-auto right-0 top-0 h-[1000px] w-[1000px] -translate-x-[-10rem] translate-y-[-10rem] rounded-full bg-[#06D001] opacity-50 blur-[200px]"
				></div>
				<div
					id="box02"
					className="absolute bottom-auto left-0 top-1/2 h-[1000px] w-[1000px] -translate-x-[5rem] translate-y-[5rem] rounded-full bg-[#9BEC00] opacity-50 blur-[200px]"
				></div>
			</div>
			<div
				id="box-form"
				className="bg-white w-[350px] rounded-lg drop-shadow-md flex items-center flex-col p-5 dark:text-white"
			>
				<h1 className="font-brand text-5xl text-zinc-900">ADvenir</h1>
				<form
					onChange={handleUserInfo}
					action="submit"
					onSubmit={handleLogin}
					className="w-full h-full flex gap-1 flex-col mt-10"
				>
					<h1 className="text-brand-500 text-xl self-center">
						Iniciar sesión
					</h1>
					<p className="text-zinc-500 ml-5">Usuario</p>
					<Input name="username" className="rounded-full h-10" />
					<p className="text-zinc-500 ml-5 mt-2">Contraseña</p>
					<InputGroup className="rounded-full h-10">
						<Input
							name="password"
							className="!rounded-full"
							type={passwordInputType}
						/>
						<InputGroup.Button
							className="!rounded-r-full"
							onClick={() => {
								setPasswordInputType((prev) =>
									prev === 'text' ? 'password' : 'text'
								);
							}}
						>
							{passwordInputType === 'text' ? (
								<IconEye />
							) : (
								<IconEyeOff />
							)}
						</InputGroup.Button>
					</InputGroup>
					<Link
						className="text-brand-400 hover:decoration-brand-600 hover:text-brand-600 cursor-pointer ml-5 w-max"
						to="/recuperar-contraseña"
					>
						Olvidaste tu contraseña?
					</Link>

					<button
						type="submit"
						className="mt-4 w-full rounded-full text-2xl py-2 font-brand bg-brand-500 hover:bg-brand-600 cursor-pointer text-brand-50 transition-colors"
					>
						Ingresar
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
