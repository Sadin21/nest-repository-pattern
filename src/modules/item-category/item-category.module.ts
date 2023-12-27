import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemCategoryController } from "./controllers/item-category.controller";
import { ItemCategoryService } from "./services/item-category.service";
import { ItemCategoryEntity } from "./entity/item-category.entity";
import { ItemCategoryRepository } from "./repositories/item-category.repository";

@Module({
    imports: [TypeOrmModule.forFeature([ItemCategoryEntity])],
    controllers: [ItemCategoryController],
    providers: [ItemCategoryService, ItemCategoryRepository],
    exports: []
})
export class ItemCategoryModule {}
