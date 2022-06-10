import { useSetRecoilState } from "recoil";
import { IFiltroEventos } from "../../interfaces/IFiltroEventos";
import { filtroDeEventos } from "../atom";

//Esse é o hook responsável pelo filtro, ele basicamente recebe o filtro e atualiza o estado responsável pelo filtro.

export const useFiltro = () => {

    const setFiltroEventos = useSetRecoilState(filtroDeEventos);
    return (filtro: IFiltroEventos) => {
        setFiltroEventos(filtro);
    }
 }