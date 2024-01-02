import { Body, Controller, Get, HttpStatus, ParseFilePipeBuilder, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { BaseController } from "src/core/controllers/base.controller";
import { ItemService } from "../services/item.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { CreateItemDto } from "../dtos/create-item.dto";
import { BaseResponse, QueryResponse } from "src/core/interfaces";

@Controller('items')
export class ItemController extends BaseController {

    constructor(
        private readonly service: ItemService
    ) {
        super();
    }

    @Post()
    @UseInterceptors(FileInterceptor('photo', {
        storage: diskStorage({
            destination: './public/uploads',
            filename: (req, photo, cb) => {
                cb(null, `${Date.now()}-${photo.originalname}`)
            }
        })
    }))
    public async store(
        @UploadedFile(
            new ParseFilePipeBuilder()
            .addFileTypeValidator({
                fileType: /(jpg|jpeg|png)$/,
            })
            .addMaxSizeValidator({ maxSize: 1024 * 1024 * 2 })
            .build({
                errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
            }),
        ) photo,
        @Body() data: CreateItemDto
    ): Promise<BaseResponse> {
        data.photo = photo.filename;
        const newData = await this.service.create(data);
        return this.createSuccessObj(newData);
    }

    @Get()
    public async findAll(): Promise<QueryResponse> {
        const data = await this.service.findAll();
        return this.createSuccessObj(data);
    }
}
