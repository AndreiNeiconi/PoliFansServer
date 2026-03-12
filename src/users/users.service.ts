import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'JhoneDoe@exemple.com',
            role: 'admin'

        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'JaneDoe@exemple.com',
            role: 'user'

        },
        {
            id: 3,
            name: 'Jack Doe',
            email: 'JackDoe@exemple.com',
            role: 'user'
        },
    ];
    
    findAll(role?: 'Admin' | 'Engeniring' | 'Intern') {
        if(role){
            return this.users.filter(user => user.role.toLowerCase() === role.toLowerCase());
        }
        return this.users;
    }
    findOne(id:number){
        const user = this.users.find(user => user.id === id);
        if(!user){
            return null;
        }
        return user;
    }   
}
