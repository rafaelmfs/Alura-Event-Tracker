import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom";

export const useDeletarEvento = () => {
    const setEventosState = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
        return setEventosState(listaAntiga => listaAntiga.filter((evt) => evt.id !== evento.id));

    }
}