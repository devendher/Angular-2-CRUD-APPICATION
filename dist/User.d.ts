export declare class UserForm {
    user: Object;
    user1: Object;
    listitems: string[];
    contacts: string[];
    userid: Number;
    heroes: {
        id: number;
        name: string;
    }[];
    Editvalue: boolean;
    showlist: boolean;
    PostDetails(user: any): void;
    deleteItem(idex1: any): void;
    Editfun(i: any): void;
    Update(u: any, i: any): void;
}
