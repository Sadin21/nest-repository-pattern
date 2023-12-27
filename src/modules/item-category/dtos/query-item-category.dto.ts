import { Transform } from "class-transformer";
import { BaseQueryDto } from "src/core/dto";

export class QueryItemCategoryDto extends BaseQueryDto {

    @Transform(({ value }) => ([
        'name',
        'description',
        'createdAt',
        'updatedAt',
        'deletedAt'
    ].includes(value)) ? value : 'createdAt')

    public orderBy: string = 'createdAt';
}
