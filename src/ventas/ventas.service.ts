import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { Repository } from 'typeorm';
import { ClienteProducto } from './entities/producto.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private readonly VentaRepository: Repository<Venta>,

    @InjectRepository(ClienteProducto)
    private readonly clienteProductiRepository: Repository<ClienteProducto>,
  ) {}
  create(createVentaDto: CreateVentaDto) {
    return 'This action adds a new venta';
  }

  findAll() {
    return this.clienteProductiRepository.find({ relations: {
      cliente: true,
  },});
  }

  findOne(id: number) {
    return `This action returns a #${id} venta`;
  }

  update(id: number, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
