import { Body, Controller, Get, Post } from "@nestjs/common";
import { ItemCategoryService } from "../services/item-category.service";
import { CreateItemCategoryDto } from "../dtos/create-item-category.dto";
import { BaseController } from "src/core/controllers/base.controller";
import { BaseResponse, QueryResponse } from "src/core/interfaces";

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

    @Get()
    public async findAll(): Promise<QueryResponse> {
        const data = await this.service.findAll();
        return this.createSuccessObj(data);
    }
}
