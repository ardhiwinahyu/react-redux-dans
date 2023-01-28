import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EditData = (props) => {
	const param = useParams();
	const navigate = useNavigate();

	const [data, setData] = useState({});
	const [isGet, setGet] = useState(false);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(`http://localhost:3000/mahasiswa/${param.id}`);
			const data = await res.json();

			setData(data);
			console.log("data");
			setGet(true);
		};

		getData();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const sendData = async () => {
			const send = await fetch(`http://localhost:3000/mahasiswa/${param.id}`, {
				method: "PUT",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(data),
			});

			const data2 = await send.json();
			console.log(data2);
			navigate("/");
		};

		if (window.confirm("Apakah anda yakin?")) {
			sendData();
		}
	};

	const handleChange = (e) => {
		let val = e.target.value;

		setData((prevState) => {
			return { ...prevState, [e.target.name]: val };
		});

		console.log(val);
		console.log(data);
	};

	return (
		<div>
			{isGet && (
				<form onSubmit={handleSubmit}>
					<input type="text" name="id" disabled="disabled" value={data.id} />
					<input type="text" name="nama" defaultValue={data.nama} onChange={handleChange} />
					<input type="text" name="kelas" defaultValue={data.kelas} onChange={handleChange} />
					<input type="text" name="jenisKelamin" defaultValue={data.jenisKelamin} onChange={handleChange} />
					<button type="submit">Simpan</button>
					<Link to="/">Kembali</Link>
				</form>
			)}
		</div>
	);
};

export default EditData;
