import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../seletores";

//Esse é o hook responsável pela lista de eventos, e ele chama o useRecoilValue que retorna
//o valor que está no estado, nesse caso a lógica foi usada pegando do selector que foi feito para o filtro,
//basicamente ele busca a lista já filtrada e se não tem nenhum filtro já foi tratado no selector resposável.

export const useListaDeEventos = () => {
    return useRecoilValue(eventosFiltradosState);
}