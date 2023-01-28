import React, { Component } from "react";

export default class RegisForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: true,
			daftarMahasiswa: this.props.daftarMahasiswa,
		};
	}

	handleInput(e) {
		this.setState({ disabled: !this.state.disabled });
	}

	handleForm(e) {
		let val = e.target.value;
		let idInput = e.target.id;
		let nameInput = e.target.name;

		console.log(val);
		console.log(idInput);
	}

	render() {
		console.log("render");
		return (
			<div>
				{/* disabled={this.state.disabled ? "disabled" : ""} */}
				{this.state.daftarMahasiswa.map((mahasiswa) => {
					return (
						<form key={Math.random()} id={mahasiswa.id} disabled={this.state.disabled ? "disabled" : ""}>
							<input type="text" name="nama" defaultValue={mahasiswa.nama} onChange={this.handleForm.bind(this)} />
							<input type="text" name="kelas" defaultValue={mahasiswa.kelas} onChange={this.handleForm.bind(this)} />
							<input type="text" name="jenisKelamin" defaultValue={mahasiswa.jenisKelamin} onChange={this.handleForm.bind(this)} />
							<button onClick={this.handleInput.bind(this)} type="button">
								EDIT
							</button>
						</form>
					);
				})}
			</div>
		);
	}
}
