'use client';

import { useState, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../../components/ui/dialog';
import { Input } from '../../../../components/ui/input';
import { Button } from '../../../../components/ui/button';
import { Label } from '../../../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select';
import { ScrollSelect } from './scroll-select';
import { Calendar } from '../../../../components/ui/calendar';
import { CustomCalendar } from './custom-calendar';
import { Card } from '../../../../components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../../../components/ui/tabs';
import { EventForm } from './event-form';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ScrollArea } from '../../../../components/ui/scroll-area';

interface Event {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
}

export default function GoogleCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [events, setEvents] = useState<Event[]>([]);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [previewEvent, setPreviewEvent] = useState<Event | null>(null);
  const [eventTime, setEventTime] = useState<Date | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleDayClick = (date: Date) => {
    console.log('Day clicked:', date);
    setDate(date);
  };

  const handleAddEvent = (title: string, date: Date, endDate?: Date) => {
    const newEvent = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      date,
      endDate: endDate || new Date(date.getTime() + 60 * 60 * 1000) // Default to 1 hour duration
    };
    setEvents([...events, newEvent]);
  };

  const handleCellClick = (date: Date) => {
    setEventTime(date);
    setShowEventPopup(true);
  };

  const handleCreateEvent = () => {
    if (!eventTitle.trim()) {
      setTitleError('Por favor, insira um título para o evento');
      return;
    }
    
    if (eventTime) {
      handleAddEvent(eventTitle, eventTime);
      setShowEventPopup(false);
      setEventTitle('');
      setTitleError('');
      setEventTime(null);
    }
  };

  const handleEventClick = (event: Event) => {
    setPreviewEvent(event);
    setEventTitle(event.title);
    setEventTime(event.date);
    setShowEventPopup(true);
  };

  const handleUpdateEvent = () => {
    if (!eventTitle.trim()) {
      setTitleError('Por favor, insira um título para o evento');
      return;
    }

    if (eventTime && previewEvent) {
      const updatedEvent = {
        ...previewEvent,
        title: eventTitle,
        date: eventTime,
        endDate: new Date(eventTime.getTime() + 60 * 60 * 1000),
      };

      setEvents((prevEvents) =>
        prevEvents.map((event) => (event.id === previewEvent.id ? updatedEvent : event))
      );

      setShowEventPopup(false);
      setPreviewEvent(null);
      setEventTitle('');
      setTitleError('');
      setEventTime(null);
    }
  };

  const handleCancelEvent = () => {
    setShowEventPopup(false);
    setEventTitle('');
    setEventTime(null);
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = new Date();
        time.setHours(hour);
        time.setMinutes(minute);
        times.push(time);
      }
    }
    return times;
  };

  const formatTimeOption = (time: Date) => {
    return format(time, 'HH:mm');
  };

  const getSnappedTime = (date: Date) => {
    const minutes = date.getMinutes();
    const snappedMinutes = Math.floor(minutes / 15) * 15;
    date.setMinutes(snappedMinutes);
    return date;
  };

  const getDayEvents = (date: Date) => {
    return events.filter(event => 
      format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  return (
    <>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Calendário Pequeno */}
      <Card className="p-4">
        <CustomCalendar
          events={events}
          onDayClick={handleDayClick}
          compact={true}
        />
        <div className="mt-4">
          <EventForm onAddEvent={handleAddEvent} />
        </div>
      </Card>

      {/* Calendário Principal */}
      <Card 
        className="p-4 lg:col-span-2"
        ref={calendarRef}
      >
        <Tabs value={view} onValueChange={(value) => setView(value as 'month' | 'week' | 'day')}>
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="month">Mês</TabsTrigger>
              <TabsTrigger value="week">Semana</TabsTrigger>
              <TabsTrigger value="day">Dia</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="month">
            <CustomCalendar
              events={events}
              onDayClick={setDate}
            />
          </TabsContent>

          <TabsContent value="week">
            <div className="space-y-4">
              <div className="grid grid-cols-8 gap-2 text-sm font-medium">
                <div></div>
                {Array.from({ length: 7 }).map((_, index) => {
                  const day = new Date(date || new Date());
                  day.setDate(day.getDate() - day.getDay() + 1 + index);
                  return (
                    <div key={index} className="text-center">
                      <div>{['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][index]}</div>
                      <div className="text-xs text-gray-500">{day.getDate()}</div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-8 gap-2">
                {/* Linha do tempo */}
                <div className="flex flex-col text-sm text-gray-500">
                  {Array.from({ length: 24 }).map((_, hour) => (
                    <div key={hour} className="h-12 border-t pt-1">
                      {`${hour.toString().padStart(2, '0')}:00`}
                    </div>
                  ))}
                </div>
                
                {/* Dias da semana */}
                {Array.from({ length: 7 }).map((_, index) => {
                  const day = new Date(date || new Date());
                  day.setDate(day.getDate() - day.getDay() + 1 + index);
                  const dayEvents = getDayEvents(day);
                  return (
                    <div key={index} className="relative">
                      {Array.from({ length: 24 }).map((_, hour) => (
                        <div 
                          key={hour} 
                          className="h-12 border-t"
                          onClick={() => {
                            const date = new Date(day);
                            date.setHours(hour);
                            date.setMinutes(0);
                            handleCellClick(date);
                          }}
                        />
                      ))}
                      
                      {dayEvents.map(event => {
                        const startTime = event.date.getTime();
                        const endTime = event.endDate?.getTime() || startTime + 60 * 60 * 1000;
                        const durationInHours = (endTime - startTime) / (1000 * 60 * 60);
                        const startPosition = (event.date.getHours() + event.date.getMinutes() / 60) * 48;
                        const height = durationInHours * 48;
                        
                        return (
                          <div
                            key={event.id}
                            className="absolute left-0 right-0 p-2 bg-blue-50 rounded border border-blue-100 cursor-pointer"
                            style={{ 
                              top: `${startPosition}px`, 
                              height: `${height}px`
                            }}
                            onClick={() => handleEventClick(event)}
                          >
                            <div className="text-sm font-medium">{event.title}</div>
                            <div className="text-xs text-gray-500">
                              {format(event.date, 'HH:mm')} - {format(event.endDate || new Date(event.date.getTime() + 60 * 60 * 1000), 'HH:mm')}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="day">
            <div className="space-y-4">
              <div className="grid grid-cols-8 gap-2 text-sm font-medium mb-4">
                <div></div>
                <div className="text-center">
                  <div>{date ? ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][date.getDay()] : '---'}</div>
                  <div className="text-xs text-gray-500">{date ? date.getDate() : '--'}</div>
                </div>
              </div>
              <div className="grid grid-cols-8 gap-4">
                {/* Linha do tempo */}
                <div className="flex flex-col text-sm text-gray-500">
                  {Array.from({ length: 24 }).map((_, hour) => (
                    <div key={hour} className="h-12 border-t pt-1">
                      {`${hour.toString().padStart(2, '0')}:00`}
                    </div>
                  ))}
                </div>
                
                {/* Dia selecionado */}
                <div className="relative col-span-7">
                  {Array.from({ length: 24 }).map((_, hour) => (
                    <div key={hour} className="h-12 border-t" />
                  ))}
                  
                  {getDayEvents(date || new Date()).map(event => {
                    const eventHour = event.date.getHours();
                    const eventMinutes = event.date.getMinutes();
                    const topPosition = eventHour * 48 + (eventMinutes / 60) * 48;
                    
                    return (
                      <div
                        key={event.id}
                        className="absolute left-0 right-0 p-2 bg-blue-50 rounded border border-blue-100"
                        style={{ top: `${topPosition}px`, height: '48px' }}
                      >
                        <div className="text-sm font-medium">{event.title}</div>
                        <div className="text-xs text-gray-500">
                          {format(event.date, 'HH:mm')}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
    <Dialog open={showEventPopup || !!previewEvent} onOpenChange={(open) => {
      if (!open) {
        setShowEventPopup(false);
        setPreviewEvent(null);
      }
    }}>
      <DialogTrigger asChild>
        <button style={{ display: 'none' }} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{previewEvent ? 'Editar Evento' : 'Criar Evento'}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="event-title">Título</Label>
            <Input
              id="event-title"
              value={eventTitle}
              onChange={(e) => {
                setEventTitle(e.target.value);
                if (titleError && e.target.value.trim()) {
                  setTitleError('');
                }
              }}
              placeholder="Nome do evento"
            />
            {titleError && (
              <p className="text-sm font-medium text-destructive">
                {titleError}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Horário Inicial</Label>
            <ScrollSelect
              options={generateTimeOptions()}
              value={eventTime}
              onChange={(time) => setEventTime(time)}
              formatOption={formatTimeOption}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={handleCancelEvent}>
              Cancelar
            </Button>
            <Button onClick={previewEvent ? handleUpdateEvent : handleCreateEvent}>
              {previewEvent ? 'Atualizar Evento' : 'Criar Evento'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
}
