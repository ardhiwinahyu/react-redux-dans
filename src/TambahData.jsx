import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default class TambahData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: { nama: "", kelas: "", jenisKelamin: "", sertifikat: null },
		};
	}

	handleSubmit(e) {
		e.preventDefault();

		console.log(this.state.data);

		const sendData = async () => {
			const res = await fetch("http://localhost:3000/mahasiswa", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(this.state.data),
			});

			console.log(res);
			alert("Data sudah tersimpan");
			console.log(redirect);
		};

		sendData();
	}

	handleOnChange(e) {
		let val = e.target.value;

		if (e.target.name === "sertifikat") {
			val = val.split(",").map((item) => {
				return item.trim();
			});
		}

		this.setState((state) => {
			return { data: { ...state.data, [e.target.name]: val } };
		});

		console.log(val);
		console.log(this.state.data);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" required disabled="disabled" placeholder="ID" />
					<input type="text" required placeholder="Nama" name="nama" onChange={this.handleOnChange.bind(this)} />
					<input type="text" required placeholder="Jenis Kelamin" name="jenisKelamin" onChange={this.handleOnChange.bind(this)} />
					<input type="text" required placeholder="Kelas" name="kelas" onChange={this.handleOnChange.bind(this)} />
					<input type="text" placeholder="Sertifikat (dipisah pakai koma)" name="sertifikat" onChange={this.handleOnChange.bind(this)} />

					<button type="submit">Simpan</button>
					<Link to="/">Kembali</Link>
				</form>
			</div>
		);
	}
}

// const TambahData = (props) => {
// 	const [dataMahasiswa, setDataMahasiswa] = useState({ nama: "", kelas: "", jenisKelamin: "", sertifikat: [] });

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		console.log(dataMahasiswa);

// 		const sendData = async () => {
// 			const res = await fetch("http://localhost:3000/mahasiswa", {
// 				method: "POST",
// 				headers: { "content-type": "application/json" },
// 				body: JSON.stringify(dataMahasiswa),
// 			});

// 			console.log(res);
// 			alert("Data sudah tersimpan");
// 			setDataMahasiswa({ nama: "", kelas: "", jenisKelamin: "", sertifikat: [] });
// 		};

// 		sendData();
// 	};

// 	const handleOnChange = (e) => {
// 		let val = e.target.value;

// 		if (e.target.name === "sertifikat") {
// 			val = val.split(",").map((item) => {
// 				return item.trim();
// 			});
// 		}

// 		setDataMahasiswa((prevState) => {
// 			return { ...prevState, [e.target.name]: val };
// 		});

// 		console.log(val);
// 		console.log(dataMahasiswa);
// 	};

// 	return (
// 		<div>
// 			<form onSubmit={handleSubmit}>
// 				<input type="text" required disabled="disabled" placeholder="ID" />
// 				<input type="text" required placeholder="Nama" name="nama" value={dataMahasiswa.nama} onChange={handleOnChange} />
// 				<input type="text" required placeholder="Jenis Kelamin" name="jenisKelamin" onChange={handleOnChange} value={dataMahasiswa.jenisKelamin} />
// 				<input type="text" required placeholder="Kelas" name="kelas" onChange={handleOnChange} value={dataMahasiswa.kelas} />
// 				<input type="text" placeholder="Sertifikat (dipisah pakai koma)" name="sertifikat" onChange={handleOnChange} value={dataMahasiswa.sertifikat} />

// 				<button type="submit">Simpan</button>
// 				<Link to="/">Kembali</Link>
// 			</form>
// 		</div>
// 	);
// };

// export default TambahData;
