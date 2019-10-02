import React, { useState } from 'react';

import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');


    async function handleSubmit(event) {
      event.preventDefault();

      const response = await api.post('/sessions', { email });

      const { _id } = response.data;

      //salvar id do usuario no local storage
      localStorage.setItem('user', _id);
      // console.log(_id);

      //history.push('caminhho) => server para fazer a navegacao depois de um evento
      history.push('/dashboard');
  }

    return (
        <>
        <p>
        Ofereca <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua network
        </p>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email" >E-mail *</label>
        <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor e-mail" 
            value={email}
            onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">Entrar</button>
        </form>
        </>
        )
}