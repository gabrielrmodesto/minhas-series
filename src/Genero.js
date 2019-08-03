import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Genero = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get('/api/genres').then(res =>{
			setData(res.data.data);
		});
	}, []);

	const deletaGenero = id => {
		axios.delete('/api/genres/'+id).then(res => {
			const filtrado = data.filter(item => item.id !== id);
			setData(filtrado);
		})
	}

	const renderizaLinha = record => {
		return(
			<tr key={record.id}>
				<th scope="row">{record.id}</th>
				<td>{record.name}</td>
				<td><button className="btn btn-danger" onClick={() => deletaGenero(record.id)}>Excluir</button></td>
				<td><Link className="btn btn-warning" to={'/generos/'+record.id}>Editar </Link></td>
			</tr>
		);
	} 

	if(data.length === 0){
		return(
			<div className="container">
				<h1>Generos</h1>
				<div className="alert alert-warning">
					Sem generos criados
				</div>
			</div>
		);
	}

	return (
		<div className="container">
			<h1>Generos</h1>
			<Link className="btn btn-primary" to="/generos/novo">Adicionar genero</Link>
			<table className="table table-dark">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Nome</th>
						<th scope="col">Ações</th>
					</tr>
				</thead>
				<tbody>
					{data.map(renderizaLinha)}
				</tbody>
			</table>
		</div>
	);
}

export default Genero;