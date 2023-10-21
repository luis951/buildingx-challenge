import { Injectable } from '@nestjs/common';
import { CreatePointDto } from './dto/create-point.dto';
import { UpdatePointDto } from './dto/update-point.dto';
import { Point } from '../schema/point.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PointService {
  constructor(@InjectModel(Point.name) private pointModel: Model<Point>) { }
  create(createPointDto: CreatePointDto) {
    const point = new this.pointModel(createPointDto);
    return point.save();
  }

  findAll() {
    return this.pointModel.find().exec();
  }

  findByEquipmentId(equipmentId: string) {
    return this.pointModel.find({ equipment: equipmentId }).exec();
  }

  findOne(id: string) {
    return this.pointModel.findOne({ _id: id }).exec();
  }

  update(id: string, updatePointDto: UpdatePointDto) {
    return this.pointModel.updateOne({ _id: id }, updatePointDto).exec();
  }

  remove(id: string) {
    return this.pointModel.deleteOne({ _id: id }).exec();
  }
}
