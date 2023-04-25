import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CafeImages } from './cafeteria-images.entity';

@Entity()
export class Cafe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  categoria: string;

  @Column({ type: 'numeric' })
  precio: number;

  @Column({ type: 'text' })
  nombre: string;

  @Column({ type: 'text' })
  inventario: string;

  @Column({ type: 'text' })
  descuento: string;

  @OneToMany(
    () => CafeImages,
    (productImages) => productImages.cafe,{
    cascade: true
})
  images?: CafeImages[];
}
