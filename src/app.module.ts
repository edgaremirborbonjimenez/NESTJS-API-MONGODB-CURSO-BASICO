import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {MongooseModule} from '@nestjs/mongoose';
@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/products-nest-tutorial')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
