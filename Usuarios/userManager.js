class UserManager {
    static users = []
    
    create(data) {
        const users = {
            id: UserManager.users.length === 0
            ? 1
            :UserManager.users[UserManager.users.length - 1].id + 1,
            name: data.name,
            photo: data.photo,
            email: data.email,
        }
        UserManager.users.push(users)
    }

    read() {
        return UserManager.users
    }

    readById(id) {
        return UserManager.users.find(each => each.id === Number(id))
    }
}

const users = new UserManager({
    name: "usuarios",
    });

    users.create({
    name: "Juan Perez",
    photo: "../Usuarios/img/Hombre1.jpg",
    email: "jperez@hola.com",
    });

    users.create({
    name: "Gonzalo Gonzalez",
    photo: "../Usuarios/img/Hombre2.jpg",
    email: "ggonzalez@hola.com",
    });

    users.create({
    name: "Fernando Fernandez",
    photo: "../Usuarios/img/Hombre3.jpg",
    email: "ffernandez@hola.com",
    });

    users.create({
    name: "Martín Pescador",
    photo: "../Usuarios/img/Hombre4.jpg",
    email: "mpescador@hola.com",
    }); 

console.log(users.read());
console.log(users.readById(2));
