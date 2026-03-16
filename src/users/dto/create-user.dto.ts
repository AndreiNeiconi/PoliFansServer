export class CreateUserDto {
  name: string;
  email: string;
  role: 'INTER' | 'ENGINIER' | 'ADMIN';
}
