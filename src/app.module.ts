import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/ormconfig';
import { ItemCategoryModule } from './modules/item-category/item-category.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { ItemModule } from './modules/item/item.module';

const timezoned = () => {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Jakarta',
  });
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WinstonModule.forRoot({
      format: winston.format.combine(
        winston.format.timestamp({ format: timezoned }),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.File({
          dirname: './log/debug/',
          filename: 'debug.log',
          level: 'debug',
        }),
        new winston.transports.File({
          dirname: './log/info/',
          filename: 'info.log',
          level: 'info',
        }),
        new winston.transports.File({
          dirname: './log/error/',
          filename: 'error.log',
          level: 'error',
        }),
      ],
      exceptionHandlers: [
        new winston.transports.File({
          dirname: './log/exceptions/',
          filename: 'exceptions.log',
        }),
      ],
      rejectionHandlers: [
        new winston.transports.File({
          dirname: './log/rejections/',
          filename: 'rejections.log',
        }),
      ],
    }),
    TypeOrmModule.forRoot(ormConfig()),

    // modules
    ItemCategoryModule,
    ItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
