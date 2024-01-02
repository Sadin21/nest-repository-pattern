import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateItemDto {

    @IsNotEmpty()
    name: string;

    @IsOptional()
    description: string;

    @IsOptional()
    photo: string;

    @IsNotEmpty()
    itemCategoryId: number;
}
