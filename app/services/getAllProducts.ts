export const getAllProducts = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    const results = await data.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return error;
  }
};
