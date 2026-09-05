import Loja from "./components/Loja";
import assets from "./assets/imagemLoja.jpg";

const App = () => {


  return (

    <>
      <Loja imagem={assets} nome="Loja de Roupas" endereco="Av. Paulista, 1000" cidade="São Paulo" telefone="(11) 5555-5555"/>
      
    </>
  )
}

export default App
