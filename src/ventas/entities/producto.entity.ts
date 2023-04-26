import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Venta } from "./venta.entity";




@Entity()
export class ClienteProducto{
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column({ type: 'text' })
    nombreProducto: string;
  
    @Column({ type: 'numeric' })
    precioUnidad: number;
  
    @Column({ type: 'text' })
    stock: string;
  
    @Column({ type: 'text' })
    categoria: string;
  
    @Column({ type: 'text' })
    descuento: string;

    @ManyToOne(() => Venta, (cliente) => cliente.nombreCliente)
    cliente: Venta
}