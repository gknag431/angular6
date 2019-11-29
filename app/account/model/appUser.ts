export class AppUser {
    userId: string;
    name: string;
    role: string;
    country: string;
    menu: Array<Menu>; 
}

export class Menu {
    id:number;
    name:string;
    label:string;  
}