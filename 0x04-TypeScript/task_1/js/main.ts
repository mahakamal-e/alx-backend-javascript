interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Create a Teacher object
const teacher: Teacher = {
    firstName: "Maha",
    lastName: "Kamal",
    fullTimeEmployee: true,
    location: "New York",
    contract: true,
};

console.log(teacher);
