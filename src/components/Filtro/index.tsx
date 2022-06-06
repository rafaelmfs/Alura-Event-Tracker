import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IFiltroEventos } from '../../interfaces/IFiltroEventos';
import { filtroDeEventos } from '../../state/atom';
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {

  const [data, setData] = useState('');
  const [estado, setEstado] = useState('');
  const setFiltroEventos = useSetRecoilState(filtroDeEventos);


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
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input
      type="date"
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)}
      placeholder="Por data"
      value={data} />

    <h3 className={style.titulo}>Filtrar por estado</h3>

    <div className={style.inputEstado}>
      <input
        type="radio"
        name="estado"
        id="estadoCompleto"
        value="completo"
        onChange={evento => setEstado(evento.target.value)} />
      <label htmlFor="#estadoCompleto">Completo</label>
    </div>
    <div className={style.inputEstado}>
      <input
        type="radio"
        name="estado"
        id="estadoIncompleto"
        onChange={evento => setEstado(evento.target.value)}
        value="incompleto" />
      <label htmlFor="#estadoIncompleto">Incompleto</label>
    </div>
    <div className={style.inputEstado}>
      <input
        type="radio"
        name="estado"
        id="nenhumEstado"
        onChange={evento => setEstado(evento.target.value)}
        value={undefined} />
      <label htmlFor="#nenhumEstado">Todos</label>
    </div>

    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro