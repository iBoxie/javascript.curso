/*
    📌  Con el super() copiamos metodos y propiedades, además del constructor.
*/
// Las clases son plantillas para crear objetos!!

class Usuario {
  constructor(usuario, password) {
    this.usuario = usuario;
    this.password = password;
  }

  obtenerPost() {
    const post = ["post1", "post2"];
    return post;
  }
}
class Moderador extends Usuario {
  constructor(usuario, password, permisos) {
    super(usuario, password); // Permite copiar los metodos y propiedades incluyendo el constructor.
    this.permisos = permisos;
  }

  borrarPost(id) {
    if (this.permisos.includes("Borrar")) {
      console.log(`El post con el ${id} ha sido borrado.`);
    } else {
      console.log("No tienes permisos para borrar el post");
    }
  }
}

const usuario = new Usuario("Carlos", "123");
console.log(usuario.obtenerPost());
// usuario.borrarPost(1);

const usuario2 = new Moderador("Andres", "123", ["Editar"]);
console.log(usuario2.obtenerPost());
console.log(usuario2.permisos);
usuario2.borrarPost(7);
