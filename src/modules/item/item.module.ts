import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemEntity } from "./entity/item.entity";
import { ItemController } from "./controllers/item.controller";
import { ItemService } from "./services/item.service";
import { ItemRepository } from "./repositories/item.repository";

@Module({
    imports: [TypeOrmModule.forFeature([ItemEntity])],
    controllers: [ItemController],
    providers: [ItemService, ItemRepository],
    exports: []
})
export class ItemModule {}
