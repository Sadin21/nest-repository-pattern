import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { ItemCategoryRepository } from "../repositories/item-category.repository";
import { ItemCategoryEntity } from "../entity/item-category.entity";
import { CreateItemCategoryDto } from "../dtos/create-item-category.dto";
import { QueryItemCategoryDto } from "../dtos/query-item-category.dto";
import { error } from "console";
import { UpdateItemCategoryDto } from "../dtos/update-item-category.dto";

@Injectable()
export class ItemCategoryService {

    constructor (
        private readonly repository: ItemCategoryRepository
    ) {}

    async create(data: CreateItemCategoryDto): Promise<ItemCategoryEntity> {
        try {
            return await this.repository.store(data);
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id: number, data: UpdateItemCategoryDto): Promise<ItemCategoryEntity> {
        try {
            await this.findOneById(id);
            return await this.repository.updateOne(id, data);
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id: number) {
        try {
            return await this.repository.destroy(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async findAll(): Promise<ItemCategoryEntity[]> {
        try {
            return await this.repository.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    async findOneById(id: number): Promise<ItemCategoryEntity> {
        try {
            const data =  await this.repository.findOneById(id);
            // if (!data) {
            //     throw new NotFoundException(`not found`);
            // }
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }
}
