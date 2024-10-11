export enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    SELLER = 'SELLER'
}

export interface User {
    username: string;
    role: Role;
}
