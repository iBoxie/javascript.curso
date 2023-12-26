const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["Post1", "Post2", "Post3"];
      const error = true;

      if (error) {
        reject("Hubo un error al intentar obtener los posts");
      } else {
        resolve(posts);
      }
    }, 2000);
  });
};

const mostrarPosts = async () => {
  try {
    const posts = await fetchPosts();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};
mostrarPosts();
