import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
export class CreateVentaDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(20)
    nombreCliente: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(20)
    direccion: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(20)
    pais: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(20)
    telefono: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(20)
    fecha: string;
  
    @IsString({each: true})
    @IsArray()
    @IsOptional()
    images?: string[];
}
