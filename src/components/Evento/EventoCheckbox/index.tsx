import React from 'react';
import { useAtualizaEvento } from '../../../state/hooks/useAtualizaEvento';
import { IEvento } from '../../../interfaces/IEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  
  const atualizarEvento = useAtualizaEvento();

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  const alterarStatus = ()=> {

    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !eventoAlterado.completo
    atualizarEvento(eventoAlterado);
  }

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox