
export class UserService{
    users: {id: number, name: string, email: string, country: string, isMarried: boolean, gender: string}[] = [
        {id: 1, name: "john", email: "ex@gmaol.com", country: "USA", isMarried: false, gender: "male"},
        {id: 2, name: "alice", email: "ex1@gmail.com", country: "USA", isMarried: true, gender: "female"},
    ]

    getAllUsers(){
        return this.users;
    }

    getUserById(id: number){
        return this.users.find(user => user.id === id);
    }
    createUser(user: {id: number, name: string, email: string, country: string, isMarried: boolean, gender: string}){
        this.users.push(user);
    }
}