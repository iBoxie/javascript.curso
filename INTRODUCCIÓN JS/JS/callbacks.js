const obtenerPostUsuarios = (usuario, callback)=>{
    console.log(`Obtener los post de ${usuario} ...`)

    setTimeout(()=>{
        let posts = ['Post1', 'Post2', 'Post3']
        callback(posts);
    },2000);
}


obtenerPostUsuarios('Carlos', (post) => {
    console.log(post)
});