import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
	selector: 'app-myform',
	templateUrl: './myform.component.html',
	styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
	hasEmail = false;
	id: number;
	name: string;
	lastName: string;
	age: number;
	email: string;
	people = [];

	constructor() { 
		this.id = 0;
	}

	ngOnInit() { }

	hasEmailChanged(checked) {
		this.hasEmail = checked;
	}

	submitForm() {
		this.id++;
		let p = new Person(this.id, this.name, this.lastName, this.age, this.email);
		this.people.push(p);
	}

}
