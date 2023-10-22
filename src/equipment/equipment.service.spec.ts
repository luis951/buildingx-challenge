import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentService } from './equipment.service';
import { Equipment } from '../schema/equipment.schema';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

describe('EquipmentService', () => {
  let service: EquipmentService;
  let model: Model<Equipment>;
  let mockService = {
    find: jest.fn(
      () => new Promise(resolve => resolve([]))
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EquipmentService,
        {
          provide: getModelToken(Equipment.name),
          useValue: mockService,
        }],
    }).compile();

    service = module.get<EquipmentService>(EquipmentService);
    model = module.get<Model<Equipment>>(getModelToken(Equipment.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of equipments', async () => {
      const mockFind = jest.spyOn(model, 'find');

      const result = service.findAll();
      expect(mockFind).toHaveBeenCalled();
    });
  });
});
