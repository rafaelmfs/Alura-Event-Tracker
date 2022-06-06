import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
    key: 'EventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos);
        const todosEventos = get(listaDeEventosState);
        const eventosPorEstado = todosEventos.filter(evento => {
            if(!filtro.estado){
                return true;
            }else if(filtro.estado === "completo"){
                return evento.completo;
            }else if(filtro.estado === "incompleto"){
                return !evento.completo;
            };
        });
        const eventosPorData = eventosPorEstado.filter(evento => {
            if(!filtro.data){
                return true;
            }else{
                const mesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10);
                return mesmoDia;

            }
        })

        return eventosPorData;
    }
})

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