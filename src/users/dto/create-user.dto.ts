export class CreateUserDto {
  readonly name: string;
  readonly info: string;
  readonly email: string;
  readonly password: string;
  readonly role: 'organizer' | 'member';
}
