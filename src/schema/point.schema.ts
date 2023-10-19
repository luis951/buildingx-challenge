import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Equipment } from "./equipment.schema";

export type PointDocument = HydratedDocument<Point>;

@Schema()
export class Point {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    dataType: string;

    @Prop({required: true})
    value: number;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Equipment', required: true})
    equipment: Equipment;
}

export const PointSchema = SchemaFactory.createForClass(Point);