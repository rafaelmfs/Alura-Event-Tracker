import { useListaDeEventos } from '../../state/hooks/useListaDeEventos';
import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';

//Aqui é onde busca os eventos e é executado nosso hook que fica responsável por buscar a lista no estado global.
const ListaDeEventos: React.FC = () => {

  const eventos = useListaDeEventos();

  return (
  <section>
    <Filtro />
    <div className={style.Scroll}>
      {eventos.map(evento => (
        <Evento evento={evento} key={evento.id} />
      ))}
    </div>
  </section>
  )
}

export default ListaDeEventos