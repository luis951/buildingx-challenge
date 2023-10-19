import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Equipment } from 'src/schema/equipment.schema';
import { Model } from 'mongoose';

@Injectable()
export class EquipmentService {
  constructor(@InjectModel(Equipment.name) private eqpModel: Model<Equipment>) {}
  create(createEquipmentDto: CreateEquipmentDto) {
    const eqp = new this.eqpModel(createEquipmentDto);
    return eqp.save();
  }

  findAll() {
    return `This action returns all equipment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipment`;
  }

  update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    return `This action updates a #${id} equipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipment`;
  }
}
