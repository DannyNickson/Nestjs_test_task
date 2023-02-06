import { IsInt,IsString } from "class-validator";

export class UpdateArticleDto{
    @IsInt({message:"Must be a int"})
    readonly id:number;
    @IsString({message:"Must be a string"})
    readonly title:string;
    @IsString({message:"Must be a string"})
    readonly body:string;
}