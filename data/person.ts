export default class Person {
    FirstName: string;
    LastName: string;
    ZipCode: number;

    constructor(firstName: string, lastName: string, zipCode: number)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.ZipCode = zipCode;
    }
}