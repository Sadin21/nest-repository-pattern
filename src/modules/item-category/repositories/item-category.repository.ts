import { Repository } from "typeorm";
import { ItemCategoryEntity } from "../entity/item-category.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateItemCategoryDto } from "../dtos/create-item-category.dto";
import { UpdateItemCategoryDto } from "../dtos/update-item-category.dto";

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

    public async updateOne(id: any, data: UpdateItemCategoryDto): Promise<ItemCategoryEntity | null> {
        const user = await this.findOneById(id);
        if (!user) return undefined;
        Object.assign(user, data);
        return this.save(user);
        
    }

    public async destroy(id: number): Promise<void> {
        await this.delete(id);
    }

    public async findAll(): Promise<ItemCategoryEntity[]> {
        return this.find();
    }

    public async findOneById(id: any): Promise<ItemCategoryEntity | null> {
        return this.findOneBy({ id: id });
    }
}