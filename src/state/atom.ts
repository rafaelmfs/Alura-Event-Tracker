import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroEventos } from "../interfaces/IFiltroEventos";
import { eventosAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroEventos>({
    key: 'FiltroDeEventos',
    default: {},
})
