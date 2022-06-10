import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom";

//Esse é o hook responsável por deletar o evento e basicamente, ele recebe o evento a ser deletado,
//utiliza o array filter retornando somente os eventos que tem o ID diferente do evento enviado
//Dessa forma é enviado para a função de atualizar o estado um array com todos os eventos
//Exceto o que foi enviado por parâmetro, ou seja, o que foi deletado. 

export const useDeletarEvento = () => {
    const setEventosState = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
        return setEventosState(listaAntiga => listaAntiga.filter((evt) => evt.id !== evento.id));

    }
}