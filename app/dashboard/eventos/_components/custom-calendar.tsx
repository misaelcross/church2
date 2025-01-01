'use client';

import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../../../components/ui/button';

interface Event {
  id: string;
  title: string;
  date: Date;
}

interface CustomCalendarProps {
  events?: Event[];
  onDayClick?: (date: Date) => void;
  compact?: boolean;
}

export function CustomCalendar({ events = [], onDayClick, compact = false }: CustomCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const getDayEvents = (date: Date) => {
    return events.filter(event => 
      format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
  };

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="w-full">
      {/* Header do Calendário */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="sm" onClick={handlePreviousMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-lg font-medium">
          {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
        </span>
        <Button variant="ghost" size="sm" onClick={handleNextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Dias da Semana */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500">
            {compact ? day[0] : day}
          </div>
        ))}
      </div>

      {/* Dias do Mês */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const dayEvents = getDayEvents(day);
          const isCurrentMonth = isSameMonth(day, currentDate);
          
          return (
            <div
              key={index}
              className={`${compact ? 'h-10 p-1' : 'h-24 p-2'} rounded-lg flex flex-col calendar-cell
                ${!isCurrentMonth ? 'bg-gray-50 text-gray-400' : 'hover:bg-gray-100'}
                ${isToday(day) && 'bg-blue-50 border border-blue-200'}
              `}
              onClick={(e) => {
                e.stopPropagation();
                onDayClick?.(day);
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onDayClick?.(day);
              }}
            >
              <div className="flex justify-center">
                <span className={`text-sm ${isToday(day) ? 'text-blue-600 font-medium' : 'text-gray-700'}`}>
                  {format(day, 'd')}
                </span>
              </div>
              {!compact && (
                <div className="flex-1 overflow-y-auto mt-1 space-y-1">
                  {dayEvents.map(event => (
                    <div
                      key={event.id}
                      className="text-xs px-1 py-0.5 bg-blue-50 rounded text-blue-700 truncate"
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
