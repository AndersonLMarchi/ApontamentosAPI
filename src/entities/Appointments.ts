
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Appointments {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    date: Date;

    @Column()
    iniTime: number;

    @Column()
    endTime: number;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

}
