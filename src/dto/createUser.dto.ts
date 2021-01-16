import { IsEmail, Length } from "class-validator";

export class CreateUser {
  @Length(0, 15)
  public id: string;

  @Length(0, 255)
  public password: string;

  @Length(0, 20)
  public nickname: string;

  @IsEmail()
  @Length(100)
  public email: string;

  @Length(0, 20)
  public phone: string;
}
