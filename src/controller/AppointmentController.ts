import Appointments from "../types/Appointments";
import connection from '../database/Connection';
import { UserController } from "./UserController";

export class AppointmentController {

    async findAll(): Promise<Array<Appointments>> {
        let sql = 'SELECT * FROM app.appointments';
        let appointments = this.getAppointmentsFromQuery(sql);
        return appointments;
    }
    
    async findById(id: string): Promise<Array<Appointments>> {
        let sql = `SELECT * FROM app.user WHERE id = ${id}`;
        let appointments = this.getAppointmentsFromQuery(sql);
        return appointments;
    }
    
    async findByDate(date: Date): Promise<Array<Appointments>> {
        let sql = `SELECT * FROM app.appointments WHERE date = ${date}`;
        let appointments = this.getAppointmentsFromQuery(sql);
        return appointments;
    }
    
    async create(appointments: Appointments) {
        let sql = `INSERT INTO app.appointments (date, iniTime, endTime, userId) 
                    VALUES (${appointments.date}, ${appointments.iniTime}, 
                            ${appointments.endTime}, ${appointments.user.id})`;
        return this.saveUserFromQuery(sql);
    }
    
    async update(appointments: Appointments) {
        let sql = `UPDATE app.appointments set date = ${appointments.id}, 
                    iniTime = ${appointments.iniTime}, 
                    endTime = ${appointments.endTime}, 
                    userId = ${appointments.user.id}, 
                    WHERE id = ${appointments.id}`;
        return this.saveUserFromQuery(sql);        
    }

    private saveUserFromQuery(sql: string) {
        connection.connect();
        connection.query(sql, [], (err, res) => {
            connection.end();
            return (err) 
                    ? 'Erro ao gravar os dados de Apontamentos: ' + err 
                    : 'Apontamento gravado com Sucesso!';
        });
    }

    private getAppointmentsFromQuery(sql: string): Array<Appointments> | any {

        connection.connect();
        connection.query(sql, [], (err, res) => {
            connection.end();            
            if (err) 
                throw err; 
            else 
                return this.getProcessedArrayAppointments(res.rows);
        });

    }

    private getProcessedArrayAppointments(rows): Array<Appointments> {

        let userController = new UserController();

        let appointments = Array<Appointments>();
        for (let row of rows) {

            let appointment = new Appointments(); 

            appointment.id = row.id;
            appointment.date = row.date;
            appointment.iniTime = row.iniTime;
            appointment.endTime = row.endTime;
            appointment.user = userController.findById(row.userId)[0];
            appointments.push(appointment);
        }
        return appointments;
    }

}
