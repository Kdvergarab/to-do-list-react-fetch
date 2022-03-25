import React, { useState } from "react";

//create your first component
const Home = () => {
	const [lista, setLista] = useState([""]);

	return (
		<div className="cajas">
			<h1 className="text-center mt-5"> TO DO LIST</h1>

			<button
				className=" boton"
				onClick={(e) => {
					fetch("https://jsonplaceholder.typicode.com/users")
						.then((e) => {
							return e.json();
						})
						.then((e) => {
							setLista(e);
						});
				}}>
				Traer datos de la ApI
			</button>
			{lista.map((e, index) => {
				return (
					<div className="container border borde" key={index}>
						<div key={index}>{e.name}</div>
						<div key={index}>{e.email}</div>
						<a href={e.website} key={index}>
							{e.username}
						</a>
						<br />
						<button
							className="cerrar"
							onClick={() => {
								let nuevaLista = [...lista];
								nuevaLista.splice(index, 1);
								setLista(nuevaLista);
							}}>
							x
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
