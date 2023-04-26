import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Venta } from "./venta.entity";


@Entity()
export class ClienteProducto{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    url: string;

    @ManyToOne(() => Venta, (venta) => venta.images)
    venta?: Venta []
}