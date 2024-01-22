import { useState } from 'react';
import { Button, TextInput, Textarea } from 'flowbite-react';
import { MdContactMail } from 'react-icons/md';

export const Contact = () => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = () => {
		console.log('#');
	};
	return (
		<div className="w-full mx-auto lg:w-[740px] py-10">
			<h2 className="flex gap-x-2 items-center text-2xl font-semibold mb-10">
				<MdContactMail className="size-7 " />
				Contacto
			</h2>
			<div className=" ">
				<form onSubmit={sendEmail} className="flex max-w-lg flex-col gap-4">
					<input
						name="fullName"
						type="text"
						placeholder="Nombre Completo"
						value={fullName}
						onChange={(e) => setFirstName(e.target.value)}
						className="lg:w-[720px] md:w-[700px]  bg-gray-700/30  focus:border-cyan-500 rounded-md p-3"
					/>

					<input
						name="email"
						type="email"
						placeholder="Correo"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="lg:w-[720px] md:w-[700px]  bg-gray-700/30  focus:border-cyan-500 rounded-md p-3"
					/>

					<Textarea
						type="text"
						name="message"
						placeholder="Mensaje"
						rows={6}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="lg:w-[720px] md:w-[700px] border-gray bg-gray-700/30  focus:border-cyan-500 rounded-md p-3"
					/>

					<Button className="mt-4 lg:w-[720px] md:w-[700px] font-semibold">
						Enviar
					</Button>
				</form>
			</div>
		</div>
	);
};
