import { Repository } from "typeorm";
import { ItemCategoryEntity } from "../entity/item-category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateItemCategoryDto } from "../dtos/create-item-category.dto";

export class ItemCategoryRepository extends Repository<ItemCategoryEntity> {

    constructor(
        @InjectRepository(ItemCategoryEntity)
        private repository: Repository<ItemCategoryEntity>
    ) {
        super(
            repository.target,
            repository.manager,
            repository.queryRunner
        );
    }

    public async store(data: CreateItemCategoryDto): Promise<ItemCategoryEntity> {
        const newData = this.create(data);
        return await this.save(newData);
    }

    public async findAll(): Promise<ItemCategoryEntity[]> {
        return this.find();
    }
}