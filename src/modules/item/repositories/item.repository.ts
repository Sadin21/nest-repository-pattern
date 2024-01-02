import { Repository } from "typeorm";
import { ItemEntity } from "../entity/item.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateItemDto } from "../dtos/create-item.dto";

export class ItemRepository extends Repository<ItemEntity> {

    constructor(
        @InjectRepository(ItemEntity)
        private repository: Repository<ItemEntity>
    ) {
        super(
            repository.target,
            repository.manager,
            repository.queryRunner
        )
    }

    public async store(data: CreateItemDto): Promise<ItemEntity> {
        const newData = this.create(data);
        return await this.save(newData);
    }

    public async findAll(): Promise<ItemEntity[]> {
        return await this.find();
    }
}
