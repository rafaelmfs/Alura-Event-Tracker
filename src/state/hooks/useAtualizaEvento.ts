import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom"

//Esse é o hook responsável por atualizar o evento caso seja modificado, 
//basicamente recebe o evento atualizado, procura qual era a posição dele e então 
//chama a função de atualizar o estado enviando um array espalhando a antiga lista 
//até a posição do evento atualizado, depois o evento atualizado e espalha o resto da lista.

export const useAtualizaEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
        return setListaDeEventos(listaAntiga => {
            const indice = listaAntiga.findIndex(evt => evt.id === evento.id);
            return [...listaAntiga.slice(0, indice), evento, ...listaAntiga.slice(indice + 1)];
        })
    }
}