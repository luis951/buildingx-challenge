import { Module } from '@nestjs/common';
import { PointService } from './point.service';
import { PointController } from './point.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Point, PointSchema } from 'src/schema/point.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Point.name, schema: PointSchema}])],
  controllers: [PointController],
  providers: [PointService],
})
export class PointModule {}
