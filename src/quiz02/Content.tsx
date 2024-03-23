
const Content = () => {
    
  return (
    <div className='card'>
      {filteredProducts.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Content;