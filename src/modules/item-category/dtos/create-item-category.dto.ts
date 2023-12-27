import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateItemCategoryDto {
    
    @IsNotEmpty()
    name: string;

    @IsOptional()
    description: string;
}
