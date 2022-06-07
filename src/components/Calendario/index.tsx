
import React from 'react'
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json'
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend'
import 'kalend/dist/styles/index.css';
import { useAtualizaEvento } from '../../state/hooks/useAtualizaEvento';
import { useListaDeEventos } from '../../state/hooks/useListaDeEventos';

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

  const onEventDragFinish: OnEventDragFinish = (
    kalendEventoInalterado: CalendarEvent,
    KalendEventoAtualizado: CalendarEvent,

    ) => {
      const evento = eventos.find(evnt => evnt.descricao === KalendEventoAtualizado.summary);
      if(evento){
        const eventoAtualizado = { ...evento};
        eventoAtualizado.inicio = new Date(KalendEventoAtualizado.startAt);
        eventoAtualizado.fim = new Date(KalendEventoAtualizado.endAt);
        atualizarEvento(eventoAtualizado);
      }
      console.log(eventos);
    };

  console.log(eventosKalend);

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
