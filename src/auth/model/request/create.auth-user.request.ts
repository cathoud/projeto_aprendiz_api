export class CreateAuthUserRequest {
  constructor(password: string, username: string, payload: any) {
    this.password = password;
    this.username = username;
    this.payload = payload;
  }

  password: string;
  username: string;
  payload: any;
}
