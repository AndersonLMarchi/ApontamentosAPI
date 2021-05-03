
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(type => User)
    @JoinColumn()
    user: User;

}
