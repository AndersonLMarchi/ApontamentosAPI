
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("appointments")
export class Appointments {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("date")
    date: Date;

    @Column("timestamp without time zone")
    iniTime: Date;

    @Column("timestamp without time zone")
    endTime: Date;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

}
