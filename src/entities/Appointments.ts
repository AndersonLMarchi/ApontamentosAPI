
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from "./User";

@Entity()
export class Appointments {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("date")
    date: Date;

    @Column("timestamp without time zone")
    iniTime: Timestamp;

    @Column("timestamp without time zone")
    endTime: Timestamp;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

}
