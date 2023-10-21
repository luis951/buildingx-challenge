import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Point } from "./point.schema";

export type EquipmentDocument = HydratedDocument<Equipment>;

@Schema()
export class Equipment {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    serialNumber: string;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);