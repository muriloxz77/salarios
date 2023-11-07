const App = () => {
    return (
      <div>
        {}
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
  
  const Ap = () => {
    return (
      <div>
        <h1>Minha Loja</h1>
        <div className="product">
          <img src="product-image.jpg" alt="Produto" />
          <div className="product-info">
            <h2>Nome do Produto</h2>
            <p>Descrição do produto.</p>
            <p>Preço: R$ 100,00</p>
            <button>Adicionar ao Carrinho</button>
          </div>
        </div>
        <div className="cart">
          <h2>Carrinho</h2>
          <p>Itens no carrinho: 0</p>
          <p>Total: R$ 0,00</p>
        </div>
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
  