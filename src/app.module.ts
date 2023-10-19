import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PointModule } from './point/point.module';
import { PointController } from './point/point.controller';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_STRING!, {dbName: 'buildingx-challenge'}), PointModule, EquipmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
