import React, { useState } from 'react';
import { IFiltroEventos } from '../../interfaces/IFiltroEventos';
import { useFiltro } from '../../state/hooks/useFiltro';
import style from './Filtro.module.scss';

//Foi utilizado o filtro por datas e por estado sendo que o estado foi só um desafio do curso mesmo, ele não foi implementado no curso e a lógica do filtro foi o Hook useFiltro que é responsável por fazer a chamada dos métodos do Recoil.
const Filtro: React.FC = () => {

  const [data, setData] = useState('');
  const [estado, setEstado] = useState('');
  const setFiltroEventos = useFiltro();

  //Esse formulário é onde o usuário preenche a data e seleciona qual o estado do evento que ele quer filtrar, depois que clica no botão é chamada essa função e no final executa o nosso hook enviando o objeto filtro.
  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const filtro: IFiltroEventos = {}
    if (data) {
      filtro.data = new Date(data);
    } if (estado) {
      filtro.estado = estado;
    } else {
      filtro.estado = undefined;
      filtro.data = null;
    }
    setFiltroEventos(filtro);

  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h2 className={style.titulo}>Filtrar por</h2>
    <h3 className={style.titulo}>Data:</h3>
    <input
      type="date"
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)}
      placeholder="Por data"
      value={data} />

    <h3 className={style.titulo}>Estado:</h3>

    <div className={style.inputEstado}>
      <input
        type="radio"
        name="estado"
        id="estadoCompleto"
        value="completo"
        onChange={evento => setEstado(evento.target.value)} 
        required
        />
      <label htmlFor="#estadoCompleto">Completo</label>
    </div>
    <div className={style.inputEstado}>
      <input
        type="radio"
        name="estado"
        id="estadoIncompleto"
        onChange={evento => setEstado(evento.target.value)}
        value="incompleto" 
        required
        />
      <label htmlFor="#estadoIncompleto">Incompleto</label>
    </div>
    <div className={style.inputEstado}>
      <input
        type="radio"
        name="estado"
        id="nenhumEstado"
        onChange={evento => setEstado(evento.target.value)}
        value="todos"
        required 
        />
      <label htmlFor="#nenhumEstado">Todos</label>
    </div>

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro