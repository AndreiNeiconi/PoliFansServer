import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'JhoneDoe@exemple.com',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'JaneDoe@exemple.com',
      role: 'user',
    },
    {
      id: 3,
      name: 'Jack Doe',
      email: 'JackDoe@exemple.com',
      role: 'user',
    },
  ];

  findAll(role?: 'INTER' | 'ENGINIER' | 'ADMIN') {
    if (role) {
      return this.users.filter(
        (user) => user.role.toLowerCase() === role.toLowerCase(),
      );
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return null;
    }
    return user;
  }
  create(createUserDto: CreateUserDto) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDto,
        };
      }
      return user;
    });
    return this.findOne(id);
  }
  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
