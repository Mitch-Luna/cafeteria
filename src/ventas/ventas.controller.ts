import { Controller, Get, Post,ParseUUIDPipe, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';


@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  create(@Body() createVentaDto: CreateVentaDto) {
    return this.ventasService.create(createVentaDto);
  }

  @Get()
  findAll() {
    return this.ventasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ventasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateVentaDto: CreateVentaDto
  ){
    return this.ventasService.update(id, updateVentaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.ventasService.remove(id);
  }
}
