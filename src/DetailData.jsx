import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailData = (props) => {
	const param = useParams();

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

	return (
		<div>
			{isGet && (
				<div>
					<div>ID : {data.id}</div>
					<div>Nama : {data.nama}</div>
					<div>Kelas : {data.kelas}</div>
					<div>Jenis Kelamin : {data.jenisKelamin}</div>
					<div>
						Sertifikat :
						{data.sertifikat.length === 0 ? (
							<div>Manusia ini tidak punya sertifikat</div>
						) : (
							data.sertifikat.map((item) => {
								return <div key={Math.random()}>{item}</div>;
							})
						)}
					</div>
					<Link to="/">Kembali</Link>
				</div>
			)}
		</div>
	);
};

export default DetailData;
