<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 01b99fda4014cf2028b957c664c08800f777a7cc
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault/PageDefault';
import FormField from '../../components/FormField/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  // ============

  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias'; 
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();

          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
<<<<<<< HEAD
=======
=======
import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>
>>>>>>> e15b193e78a695909f149a9b35063b93734a5c9c
>>>>>>> 01b99fda4014cf2028b957c664c08800f777a7cc

        <button>
          Cadastrar
        </button>
      </form>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 01b99fda4014cf2028b957c664c08800f777a7cc
      

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>
<<<<<<< HEAD
=======
=======

>>>>>>> e15b193e78a695909f149a9b35063b93734a5c9c
>>>>>>> 01b99fda4014cf2028b957c664c08800f777a7cc

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;