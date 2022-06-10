
import React from 'react'
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import { useAtualizaEvento } from '../../state/hooks/useAtualizaEvento';
import { useListaDeEventos } from '../../state/hooks/useListaDeEventos';
import { IEvento } from '../../interfaces/IEvento';

interface IKalendEvento {
  id?: string
  startAt: string
  endAt: string
  summary: string
  color: string
}

const Calendario: React.FC = () => {

  const eventosKalend = new Map<string, IKalendEvento[]>();
  const eventos = useListaDeEventos();
  const atualizarEvento = useAtualizaEvento();


  eventos.forEach(evento => {
    const chave = evento.inicio.toISOString().slice(0, 10)
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, [])
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'blue'
    })
  })

  //Esse é o método que atualiza o evento quando o usuário utiliza o click e arraste para mudar a data do evento.
  //Basicamente esse é um evento da própria biblioteca e o que nos fizemos aqui foi somente criar um novo evento e enviar ele atualizado para a lista.
  const onEventDragFinish: OnEventDragFinish = (
    kalendEventoInalterado: CalendarEvent,
    KalendEventoAtualizado: CalendarEvent,

    ) => {
      const evento = {
        id: KalendEventoAtualizado.id,
        descricao: KalendEventoAtualizado.summary,
        inicio: new Date(KalendEventoAtualizado.startAt),
        fim: new Date(KalendEventoAtualizado.endAt)
      } as IEvento;
      atualizarEvento(evento);

    };

  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
}

export default Calendario
