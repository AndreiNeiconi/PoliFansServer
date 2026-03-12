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

@Controller('users')
export class UsersController {
  @Get() //Get /users or /users?role=value
  findAll(@Query('role') role?: 'intern' | 'Engeniring' | 'Admin') {
    return [];
  }
  @Get(':id') //Get /user/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post() // Post /users
  create(@Body() user: {}) {
    return user;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
