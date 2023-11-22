/*
    📌  "static", es que podemos acceder a ella sin definidir un objeto con "new".
*/

class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }
  static borrarUsuario(id_usuario) {
    console.log(
      `El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`
    );
  }
  static registrados = 1000;
}

// const usuario = new Usuario ('Andres','bxgmyt94@gmail.com');
// usuario.borrarUsuario(1)

Usuario.borrarUsuario(1);
console.log(Usuario.registrados);
