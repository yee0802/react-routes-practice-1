function ProductsPage(props) {
  console.log("Inside ProductsPage: ", { props });

  const { products } = props;

  return (
    <main>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <h3>{product.name}</h3>
              <p>£{product.price}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ProductsPage;
