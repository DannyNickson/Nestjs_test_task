import { IsString } from "class-validator";

export class CreateArticleDto {
  @IsString({ message: "Must be a string" })
  readonly title: string;
  @IsString({ message: "Must be a string" })
  readonly body: string;
}
