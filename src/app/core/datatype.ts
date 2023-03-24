export interface Signup{
    name:string;
    email:string;
    password:string;
}

export default interface login{
    email:string;
    password:string;
}

export interface Products{
    name:string;
    price: string;
    category:string;
    color:string;
    description:string;
    image:string;
    id:number;
}