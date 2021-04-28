import User from "../types/User";
import connection from '../database/Connection';

export class UserController {

    async findAll(): Promise<Array<User>>  {
        let sql = 'SELECT * FROM app.user';
        let users = this.getUsersFromQuery(sql);
        return users;
    }
    
    async findById(id: string): Promise<Array<User>> {
        let sql = `SELECT * FROM app.user WHERE id = ${id}`;
        let users = this.getUsersFromQuery(sql);
        return users;
    }
    
    async findByName(name: string): Promise<Array<User>>  {
        let sql = `SELECT * FROM app.user WHERE name = ${name}`;
        let users = this.getUsersFromQuery(sql);
        return users;
    }
    
    async create(user: User) {
        let sql = `INSERT INTO app.user (name, birthday) VALUES (${user.name}, ${user.birthday})`;
        return await this.saveUserFromQuery(sql);
    }
    
    async update(user: User) {
        let sql = `UPDATE app.user set name = ${user.name}, birthday = ${user.birthday} WHERE id = ${user.id}`;
        return this.saveUserFromQuery(sql);        
    }

    private saveUserFromQuery(sql: string) {
       // connection.connect();
        connection.query(sql, [], (err, res) => {
            //connection.end();
            return (err) 
                    ? 'Erro ao gravar os dados de Usuário: ' + err 
                    : 'Usuário gravado com Sucesso!';
        });
    }

    private getUsersFromQuery(sql: string): Array<User> | any {

        connection.connect();
        connection.query(sql, [], (err, res) => {
            connection.end();            
            if (err) 
                throw err; 
            else 
                return this.getProcessedArrayUsers(res.rows);
        });

    }

    private getProcessedArrayUsers(rows): Array<User> {
        let users = Array<User>();
        for (let row of rows) {

            let user = new User(); 

            user.id = row.id;
            user.name = row.name;
            user.birthday = row.birthday;
            users.push(user);
        }
        return users;
    }

}
