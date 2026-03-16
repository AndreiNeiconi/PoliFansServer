import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/create-user.dto';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() //Get /users or /users?role=value
  findAll(@Query('role') role?: 'Intern' | 'Engeniring' | 'Admin') {
    return this.usersService.findAll(role);
  }
  @Get(':id') //Get /user/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  @Post() // Post /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'Admin' | 'Engeniring' | 'Intern';
    },
  ) {
    return this.usersService.create(user);
  }
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
        role?: UpdateUserDto;
    },
  ) {
    return this.usersService.update(id, userUpdate);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
