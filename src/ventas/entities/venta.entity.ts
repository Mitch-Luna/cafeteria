import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClienteProducto } from "./producto.entity";

@Entity()
export class Venta {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'text' })
    nombreCliente: string;
  
    @Column({ type: 'text' })
    direccion: string;
  
    @Column({ type: 'text' })
    pais: string;
  
    @Column({ type: 'text' })
    telefono: string;
  
    @Column({ type: 'text' })
    fecha: string;
    
    @OneToMany(() => ClienteProducto, (clienProducto) => clienProducto.nombreProducto,{
        cascade: true
    })
    cliente: ClienteProducto[]
}
