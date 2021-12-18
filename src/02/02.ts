import {Address} from "cluster";

type TechnologiesType = {
    id: number
    title: string
}
type CityType = {
    cityTitle: string
    country: string
}
type AddressType = {
    city: CityType
    street: string
    home: number
    korpus: number
}
type StudentType = {
    id: number
    name: string,
    age: number,
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    id: 1,
    name: 'Mike',
    age: 31,
    isActive: false,
    address: {
        city: {
            cityTitle: 'Minsk',
            country: "Belarus",
        },
        street: 'Jakubovskogo',
        home: 22,
        korpus: 1,
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'JS'},
    ]
};


console.log(student.age);
console.log(student.name);
console.log(student.isActive);
console.log(student.address.city.cityTitle);
console.log(student.technologies[2].title);

