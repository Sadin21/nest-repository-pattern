import { IsOptional } from "class-validator";

export class UpdateItemCategoryDto {

    @IsOptional()
    name?: string;

    @IsOptional()
    description?: string;
}
