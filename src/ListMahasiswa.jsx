import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemMahasiswa from "./ItemMahasiswa";
import { connect } from "react-redux";

class ListMahasiswa extends Component {
	constructor(props) {
		super(props);

		this.state = { daftarMahasiswa: [], isData: false };
	}

	componentDidMount() {
		this.setState({ daftarMahasiswa: this.props.getMhs });
		this.setState({ isData: true });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.daftarMahasiswa !== this.props.getMhs) {
			this.setState({ daftarMahasiswa: this.props.getMhs });
			this.setState({ isData: true });
		}
	}

	removeData = async (id) => {
		await fetch(`http://localhost:3000/mahasiswa/${id}`, {
			method: "DELETE",
		});
	};

	handleRemove(e) {
		let id = e.target.id;

		if (window.confirm("Apakah anda ingin menghapusnya?")) {
			this.removeData(id);
			window.location.reload();
		}
	}

	componentWillUnmount() {
		if (this.state.isData) {
			alert("Anda akan meninggalkan halaman");
		}
	}

	render() {
		return (
			<div>
				<h2>List Mahasiswa</h2>
				<Link to="mahasiswa/create">Tambah Data Mahasiswa</Link>

				{this.state.isData ? (
					this.state.daftarMahasiswa.map((item) => {
						return <ItemMahasiswa id={item.id} nama={item.nama} kelas={item.kelas} jenisKelamin={item.jenisKelamin} handleRemove={this.handleRemove.bind(this)} key={item.id} />;
					})
				) : (
					<div>Loading...</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = function (state) {
	return {
		getMhs: state.dataMahasiswa,
	};
};

export default connect(mapStateToProps)(ListMahasiswa);

// const ListMahasiswa = (props) => {
// 	const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);

// 	useEffect(() => {
// 		const getData = async () => {
// 			const res = await fetch("http://localhost:3000/mahasiswa/");
// 			const data = await res.json();
// 			setDaftarMahasiswa(data);
// 		};

// 		getData();
// 	}, []);

// 	const removeData = async (id) => {
// 		await fetch(`http://localhost:3000/mahasiswa/${id}`, {
// 			method: "DELETE",
// 		});
// 	};

// 	const handleRemove = (e) => {
// 		let id = e.target.id;

// 		if (window.confirm("Apakah anda ingin menghapusnya?")) {
// 			removeData(id);
// 			window.location.reload();
// 		}
// 	};

// 	return (
// 		<div>
// 			<h2>List Mahasiswa</h2>
// 			<Link to="mahasiswa/create">Tambah Data Mahasiswa</Link>
// 			{daftarMahasiswa.map((item) => {
// 				return (
// 					<div key={Math.random()} className="box-mhs">
// 						<ul>
// 							<li>{item.id}</li>
// 							<li>{item.nama}</li>
// 							<li>{item.kelas}</li>
// 							<li>{item.jenisKelamin}</li>
// 							<Link to={`/mahasiswa/edit/${item.id}`}>Edit</Link>
// 							<button onClick={handleRemove} id={item.id}>
// 								Remove
// 							</button>

// 							<Link to={`/mahasiswa/detail/${item.id}`}>Details</Link>
// 						</ul>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

// export default ListMahasiswa;

// <div key={Math.random()} className="box-mhs">
// 							<ul>
// 								<li>{item.id}</li>
// 								<li>{item.nama}</li>
// 								<li>{item.kelas}</li>
// 								<li>{item.jenisKelamin}</li>
// 								<Link to={`/mahasiswa/edit/${item.id}`}>Edit</Link>
// 								<button onClick={this.handleRemove.bind(this)} id={item.id}>
// 									Remove
// 								</button>

// 								<Link to={`/mahasiswa/detail/${item.id}`}>Details</Link>
// 							</ul>
// 						</div>
