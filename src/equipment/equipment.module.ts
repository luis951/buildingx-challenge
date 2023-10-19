import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Equipment, EquipmentSchema } from 'src/schema/equipment.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Equipment.name, schema: EquipmentSchema}])],
  controllers: [EquipmentController],
  providers: [EquipmentService],
  exports: [EquipmentService],
})
export class EquipmentModule {}
