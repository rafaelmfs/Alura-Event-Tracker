import React from 'react';
import { useDeletarEvento } from '../../state/hooks/useDeletarEvento';
import { IEvento } from '../../interfaces/IEvento'
import style from './Evento.module.scss';
import EventoCheckbox from './EventoCheckbox';

const Evento: React.FC<{ evento: IEvento}> = ({ evento }) => {
  
  //É utilizado um hook que nós criamos para excluir o evento, esse hook é que fica responsável pela implementação da exclusão.
  const excluir = useDeletarEvento();

  const estilos = [
    style.Evento
  ]

  if (evento.completo) {
    estilos.push(style.completo)
  }

  return (<div className={estilos.join(' ')}>

    <EventoCheckbox evento={evento} />
    <div className="cards-info">
      <h3 className={style.descricao}>{evento.descricao} - {evento.inicio.toLocaleDateString()}</h3>
    </div>
    <i className="far fa-times-circle fa-2x" onClick={() => excluir(evento)}></i>
  </div>)
}

export default Evento