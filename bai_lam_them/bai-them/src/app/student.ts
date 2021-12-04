export class Student {
  id: string;
  name: string;
  birthday: string;
  gender: number;
  address: string;
  phone: string;
  email: string;
  language: string;

  constructor(
    id: string,
    name: string,
    birthday: string,
    gender: number,
    address: string,
    phone: string,
    email: string,
    language: string
  ) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.language = language;
  }
}
