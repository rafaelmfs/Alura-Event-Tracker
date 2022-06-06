import { useRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";
import { v4 as uuidv4 } from 'uuid';


export const useAdicionarEvento = () => {
    const [listaDeEventos, setListaDeEventos] = useRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
        const hoje = new Date();
        if(evento.inicio < hoje){
            throw new Error("Eventos não podem ser cadastrados com data anterior a atual.")
        }
        evento.id = uuidv4();
        const novaLista = [...listaDeEventos, evento];
        return setListaDeEventos(novaLista);
    }
}
