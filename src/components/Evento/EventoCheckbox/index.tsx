import React from 'react';
import { useAtualizaEvento } from '../../../state/hooks/useAtualizaEvento';
import { IEvento } from '../../../interfaces/IEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  
  //É utilizado um hook que nós criamos para atualizar o evento, onde é chamado o hook e ele fica responsável pela implementação da atualização do evento.
  const atualizarEvento = useAtualizaEvento();

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  const alterarStatus = ()=> {
    //O evento é recebido via props então é somente leitura, foi criado uma constante e espalhado o conteúdo do evento nela para então podermos alterar ele e atualizar a lista de eventos.
    const eventoAlterado = {
      ...evento
    }
    //Aqui é alterado o estado do evento e depois chamado nosso hook e enviado o evento alterado como parametro para que possa atualizar a lista.
    eventoAlterado.completo = !eventoAlterado.completo
    atualizarEvento(eventoAlterado);
  }

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox