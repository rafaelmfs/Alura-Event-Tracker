import { useRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";
import { v4 as uuidv4 } from 'uuid';

//Esse é o hook responsável por adicionar um evento no nosso estado global, basicamente ele 
//recebe um evento, verifica se a data de inicio não é retroativa, se for já lança um erro 
//informando que não é possível cadastrar o evento e se não for, adiciona um id para o evento,
//cria uma nova lista com o conteúdo da anterior, adiciona um novo evento e chama a função de atualizar o estado.
//O hook useRecoilState funciona de uma forma um pouco parecida com o useState, 
//ele retorna o estado e a função que atualiza o estado a diferença é que nos parâmetros 
//enviamos o atom responsável por esse estado.

export const useAdicionarEvento = () => {
    const [listaDeEventos, setListaDeEventos] = useRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
        const hoje = new Date();
        if(evento.inicio < hoje){
            throw new Error("Eventos não podem ser cadastrados com data anterior a atual.")
        }
        evento.id = uuidv4().slice(0, 8);
        const novaLista = [...listaDeEventos, evento];
        return setListaDeEventos(novaLista);
    }
}
