export class Person {
	id: number;
	name: string;
	lastName: string;
	age: number;
	email: string;

	constructor(id: number, name: string, lastName: string, age: number, email: string) {
		this.id = id;
		this.name = name;
		this.lastName = lastName;
		this.age = age;
		(email != undefined) ? this.email = email : this.email = "";
	}
}
