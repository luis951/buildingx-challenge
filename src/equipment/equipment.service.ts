import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Equipment } from '../schema/equipment.schema';
import { Model } from 'mongoose';

@Injectable()
export class EquipmentService {
  constructor(@InjectModel(Equipment.name) private eqpModel: Model<Equipment>) { }
  create(createEquipmentDto: CreateEquipmentDto) {
    const eqp = new this.eqpModel(createEquipmentDto);
    return eqp.save();
  }

  findAll() {
    return this.eqpModel.find().exec();
  }

  findOne(id: string) {
    return this.eqpModel.findOne({ _id: id }).exec();
  }

  update(id: string, updateEquipmentDto: UpdateEquipmentDto) {
    return this.eqpModel.updateOne({ _id: id }, updateEquipmentDto).exec();
  }

  remove(id: string) {
    return this.eqpModel.deleteOne({ _id: id }).exec();
  }
}
