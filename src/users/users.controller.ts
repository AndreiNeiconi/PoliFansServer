import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {UsersService} from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {

  }
  @Get() //Get /users or /users?role=value
  findAll(@Query('role') role?: 'Intern' | 'Engeniring' | 'Admin') {
    return this.usersService.findAll(role);
  }
  @Get(':id') //Get /user/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  @Post() // Post /users
  create(@Body() user: {name: string, email: string, role: 'Admin' | 'Engeniring' | 'Intern'}) {
    return this.usersService.create(user);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {name?: string, email?: string, role?: 'Admin' | 'Engeniring' | 'Intern'}) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
