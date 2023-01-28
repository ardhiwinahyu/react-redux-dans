import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ItemMahasiswa extends Component {
	render() {
		return (
			<div key={this.props.id} className="box-mhs">
				<ul>
					<li>{this.props.id}</li>
					<li>{this.props.nama}</li>
					<li>{this.props.kelas}</li>
					<li>{this.props.jenisKelamin}</li>
					<Link to={`/mahasiswa/edit/${this.props.id}`}>Edit</Link>
					<button onClick={this.props.handleRemove} id={this.props.id}>
						Remove
					</button>

					<Link to={`/mahasiswa/detail/${this.props.id}`}>Details</Link>
				</ul>
			</div>
		);
	}
}
