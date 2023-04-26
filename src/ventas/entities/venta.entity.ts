import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClienteProducto } from "./producto-image.entity";

@Entity()
export class Venta {
    @PrimaryGeneratedColumn('uuid')
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
    
    @OneToMany(() => ClienteProducto, (clienProducto) => clienProducto.venta,{
        cascade: true
    })
    images?: ClienteProducto[]
}
