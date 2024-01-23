import { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import emailjs from 'emailjs-com';
import { Button } from 'flowbite-react';
import { MdContactMail } from 'react-icons/md';

export const Contact = () => {
	const form = useRef();
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = async (e) => {
		e.preventDefault();

		if (!fullName || !email || !message) {
			await Swal.fire({
				icon: 'error',
				title: 'Campos vacíos',
				text: 'Por favor, completa todos los campos del formulario.',
			});
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			await Swal.fire({
				icon: 'error',
				title: 'Email no valido',
				text: 'Por favor, ingresa un email valido.',
			});
			return;
		}

		try {
			await emailjs.sendForm(
				'service_5j3az7j',
				'template_mu6tyns',
				form.current,
				'dYHqmpMq_7MR0wfEq'
			);

			e.target.reset();
			setFullName('');
			setEmail('');
			setMessage('');

			await Swal.fire({
				icon: 'success',
				title: '¡Éxito!',
				text: 'El formulario se ha enviado correctamente.',
			});
		} catch (error) {
			await Swal.fire({
				icon: 'error',
				title: 'Error',
				text: 'Hubo un problema al enviar el formulario. Inténtalo de nuevo.',
			});
		}
	};
	return (
		<div className="w-full mx-auto lg:w-[740px] py-10">
			<h2 className="flex gap-x-2 items-center text-2xl font-semibold mb-10">
				<MdContactMail className="size-7 " />
				Contacto
			</h2>
			<div className=" ">
				<form
					ref={form}
					onSubmit={sendEmail}
					className="flex max-w-lg flex-col gap-4"
				>
					<input
						name="fullName"
						type="text"
						placeholder="Nombre Completo"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						className="lg:w-[720px] md:w-[700px]  bg-gray-700/30  focus:border-cyan-500 rounded-md p-3 text-white/70 font-semibold"
					/>

					<input
						name="email"
						type="email"
						placeholder="Correo"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="lg:w-[720px] md:w-[700px]  bg-gray-700/30  focus:border-cyan-500 rounded-md p-3 text-white/70 font-semibold"
					/>

					<textarea
						type="text"
						name="message"
						placeholder="Mensaje"
						rows={6}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="lg:w-[720px] md:w-[700px] border-gray bg-gray-700/30  focus:border-cyan-500 rounded-md p-3 text-white/70 font-semibold"
					/>

					<Button
						type="submit"
						className="mt-4 lg:w-[120px] md:w-[120px] font-semibold"
					>
						Enviar
					</Button>
				</form>
			</div>
		</div>
	);
};
