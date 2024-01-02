import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from "@nestjs/common";
import { ItemCategoryService } from "../services/item-category.service";
import { CreateItemCategoryDto } from "../dtos/create-item-category.dto";
import { BaseController } from "src/core/controllers/base.controller";
import { BaseResponse, QueryResponse } from "src/core/interfaces";
import { UpdateItemCategoryDto } from "../dtos/update-item-category.dto";

@Controller("item-categories")
export class ItemCategoryController extends BaseController {

    constructor(
        private readonly service: ItemCategoryService
    ) {
        super();
    }

    @Post()
    public async create(@Body() data: CreateItemCategoryDto): Promise<BaseResponse> {
        const newData = await this.service.create(data);
        return this.createSuccessObj(newData);
    }

    @Put(':id')
    public async update(@Param('id') id: number, @Body() body: UpdateItemCategoryDto): Promise<BaseResponse> {
        const oldData = await this.service.update(id, body);
        return this.createSuccessObj(oldData);
    }

    @Delete(':id')
    public async delete(@Param('id') id: number): Promise<BaseResponse> {
        const data = await this.service.delete(id);
        return this.createSuccessObj(data);
    }

    @Get()
    public async findAll(): Promise<QueryResponse> {
        const data = await this.service.findAll();
        return this.createSuccessObj(data);
    }

    @Get(':id')
    public async findOneById(@Param('id') id: number): Promise<BaseResponse> {
        const data = await this.service.findOneById(id);

        return this.createSuccessObj(data);
    }
}
