import "./App.css";

import React, { Component, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListMahasiswa from "./ListMahasiswa";
import TambahData from "./TambahData";
import DetailData from "./DetailData";
import EditData from "./EditData";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentHour: new Date().getHours(),
		};
	}

	hourCheck() {
		if (this.state.currentHour < 12) {
			return "Selamat pagi";
		} else if (this.state.currentHour < 15) {
			return "Selamat siang";
		} else if (this.state.currentHour < 18) {
			return "Selamat sore";
		} else {
			return "Selamat malam";
		}
	}

	render() {
		return (
			<div>
				<h1>{`${this.hourCheck()} Ardhi`} </h1>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<ListMahasiswa />} />
						<Route path="/mahasiswa/create" element={<TambahData />} />
						<Route path="/mahasiswa/detail/:id" element={<DetailData />} />
						<Route path="/mahasiswa/edit/:id" element={<EditData />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

// const App = (props) => {
// 	const [currentHour, setCurrentHour] = useState(new Date().getHours());

// 	const hourCheck = () => {
// 		if (currentHour < 12) {
// 			return "Selamat pagi";
// 		} else if (currentHour < 15) {
// 			return "Selamat siang";
// 		} else if (currentHour < 18) {
// 			return "Selamat sore";
// 		} else {
// 			return "Selamat malam";
// 		}
// 	};

// 	return (
// 		<div>
// 			<h1>{`${hourCheck()} Ardhi`} </h1>
// 			<BrowserRouter>
// 				<Routes>
// 					<Route path="/" element={<ListMahasiswa />} />
// 					<Route path="/mahasiswa/create" element={<TambahData />} />
// 					<Route path="/mahasiswa/detail/:id" element={<DetailData />} />
// 					<Route path="/mahasiswa/edit/:id" element={<EditData />} />
// 				</Routes>
// 			</BrowserRouter>
// 		</div>
// 	);
// };

// export default App;
