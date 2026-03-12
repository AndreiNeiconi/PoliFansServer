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
    create(user: {name: string, email: string, role: 'Admin' | 'Engeniring' | 'Intern'}) {
        const userByHighestId = [...this.users].sort((a, b) => b.id = a.id);
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser);
        return newUser;
    }
    update(id:number,updateUser:{name?: string, email?: string, role?: 'Admin' | 'Engeniring' | 'Intern'})
    {
        this.users = this.users.map(user => {
            if(user.id === id){
                return {
                    ...user,
                    ...updateUser
                }
            }
            return user;
        });
        return this.findOne(id);
    }
    delete(id:number){
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
}
