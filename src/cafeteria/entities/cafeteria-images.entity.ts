import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cafe } from "./cafeteria.entity";


@Entity()
export class CafeImages{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    url:string;

    @ManyToOne(
        () => Cafe,
        (cafe) => cafe.images
    )
    cafe: Cafe
}