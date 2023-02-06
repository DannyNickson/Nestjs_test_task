import { IsInt } from "class-validator";

export class DeleteArticleDto{
    @IsInt({message:"Must be a int"})
    readonly id:number;
}