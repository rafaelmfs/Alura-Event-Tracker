import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../seletores";

export const useListaDeEventos = () => {
    return useRecoilValue(eventosFiltradosState);
}