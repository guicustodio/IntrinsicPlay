import React from 'react';
import Menu from './Components/Menu/index'
import DadosIniciais from './Components/Data/dados_iniciais.json'
import BannerMain from './Components/BannerMain';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Menu/>
      <BannerMain 
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end"}/>

      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[0]}
        />

      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[1]}
        />

      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[1]}
        />

      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[1]}
        />

      <Footer></Footer>

    </div>
  );
}

export default App;
