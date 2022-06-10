import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

//Esse é o selector responsável por entregar a lista de eventos filtrados, ele pega o estado do filtro
//e a lista de eventos, depois faz as tratativas de filtro por data e filtro por estado, e retorna a lista filtrada.
//É tratado em cada uma das condições seja data ou estado que se não estiver preenchido vai retornar todos eventos.

export const eventosFiltradosState = selector({
    key: 'EventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos);
        const todosEventos = get(listaDeEventosState);

        const eventosPorData = todosEventos.filter(evento => {
            if(!filtro.data){
                return true;
            }else{
                const mesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
                return mesmoDia;

            }
        })

        const eventosPorEstado = eventosPorData.filter(evento => {
            if(!filtro.estado || filtro.estado === "todos"){
                return true;
            }else if(filtro.estado === "completo"){
                return evento.completo;
            }else if(filtro.estado === "incompleto"){
                return !evento.completo;
            };
        });

        return eventosPorEstado;
    }
})

//Esse aqui é o selector responsável por fazer a comunicação com a API do json server que está rodando na porta 8080,
//Basicamente ele faz o fetch e retorna um array com os dados.
//Ele é chamado no default do atom para já iniciar com esses estados como padrão.

export const eventosAsync = selector({
    key: 'eventosAsyn',
    get: async () => {
        const respostaHttp = await fetch('http://localhost:8080/eventos');
        const eventosJson: IEvento[] = await respostaHttp.json();
        return eventosJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim),
        }))

    }
})