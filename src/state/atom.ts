import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroEventos } from "../interfaces/IFiltroEventos";
import { eventosAsync } from "./seletores";

//Aqui é onde se encontam os estados globais e tem a lista de eventos e o filtro de enventos,
//Basicamente só é criado os estados e inicializado no default.
//A lista de eventos já chama o selector eventosAsync para começar com a lista já criada
//Os filtros iniciam com um objeto vazio.

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroEventos>({
    key: 'FiltroDeEventos',
    default: {},
})
