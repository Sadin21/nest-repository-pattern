import { Transform } from "class-transformer";

export class BaseQueryDto {

    public keyword?: string;
    
    @Transform(({ value }) => (isNaN(value) || value < 0)? 100 : +value)
    public limit: number = 100;
  
    @Transform(({ value }) => (isNaN(value) || value < 0)? 0 : +value)
    public offset: number = 0;
  
    @Transform(({ value }) => value === 'true')
    public totalRecords: boolean = false;
  
    public orderBy: string = 'updatedDate';
  
    @Transform(({ value }) => ([ 'ASC', 'DESC' ].includes(value.toUpperCase()))? value.toUpperCase() : 'DESC')
    public order: 'ASC' | 'DESC' = 'DESC';
}