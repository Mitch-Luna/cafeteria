import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { ClienteProducto } from './entities/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Venta,ClienteProducto])],
  controllers: [VentasController],
  providers: [VentasService]
})
export class VentasModule {}
export class ClienteProductoModule {}
