export class LoginAuthUserRequest {
  constructor(password: string, username: string) {
    this.password = password;
    this.username = username;
  }

  password: string;
  username: string;
}
