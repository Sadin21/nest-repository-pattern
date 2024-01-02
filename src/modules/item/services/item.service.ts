import { Injectable } from "@nestjs/common";
import { CreateItemDto } from "../dtos/create-item.dto";
import { ItemEntity } from "../entity/item.entity";
import { ItemRepository } from "../repositories/item.repository";

@Injectable()
export class ItemService {

    constructor (
        private readonly repository: ItemRepository
    ) {}

    async create(data: CreateItemDto): Promise<ItemEntity> {
        try {
            return await this.repository.store(data);
        } catch (error) {
            throw new Error(error);
        }
    }

    async findAll(): Promise<ItemEntity[]> {
        try {
            return await this.repository.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }
}
