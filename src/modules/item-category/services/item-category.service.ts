import { Injectable } from "@nestjs/common";
import { ItemCategoryRepository } from "../repositories/item-category.repository";
import { ItemCategoryEntity } from "../entity/item-category.entity";
import { CreateItemCategoryDto } from "../dtos/create-item-category.dto";
import { QueryItemCategoryDto } from "../dtos/query-item-category.dto";

@Injectable()
export class ItemCategoryService {

    constructor (
        private readonly repository: ItemCategoryRepository
    ) {}

    async create(data: CreateItemCategoryDto): Promise<ItemCategoryEntity> {
        // try {
            return await this.repository.store(data);
        // } catch (errro) {
        //     this.logger.error(error);
        // }
    }

    async findAll(): Promise<ItemCategoryEntity[]> {
        return await this.repository.findAll();
    }

    async findOneById(id: number): Promise<ItemCategoryEntity> {
        const data =  await this.repository.findOneById(id);
        // if (!data) {
        //   throw new Error('Item category not found');  
        // }
        return data;
    }
}
