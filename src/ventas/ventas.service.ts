import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { Repository } from 'typeorm';
import { ClienteProducto } from './entities/producto-image.entity';
import { url } from 'inspector';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventaRepository: Repository<Venta>,

    @InjectRepository(ClienteProducto)
    private readonly clienteProductiRepository: Repository<ClienteProducto>,
  ) {}

  async create(ventaDto: CreateVentaDto){
    const { images = [], ...detalleVenta } = ventaDto;
    const venta = await this.ventaRepository.create({
      ...detalleVenta,
      images : images.map((image) => this.clienteProductiRepository.create({url: image}))
    })
    await this.ventaRepository.save(venta);
    return venta;
  }


  findAll() {
    return this.clienteProductiRepository.find({ relations: {
      venta: true,
  },});
  }

 findOne(id: string) {
    return this.ventaRepository.findOneBy({ id });
  }

  async update(id: string, cambios: CreateVentaDto){
    const venta = await this.ventaRepository.preload({
      id: id, 
      ...cambios,
      images:[],
    });
    await this.ventaRepository.save(venta);
    return venta;
  }

  async remove(id: string) {
    const venta = await this.findOne(id);
    await this.ventaRepository.remove(venta);
    return 'Venta eliminado satisfactoriamente';
  }
}
