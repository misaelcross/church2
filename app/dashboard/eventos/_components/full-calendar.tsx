'use client';

import { Card } from '../../../../components/ui/card';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState, useEffect } from 'react';

export default function FullCalendarComponent() {
  const [events, setEvents] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAddEvent = (event: any) => {
    setEvents([...events, event]);
  };

  if (!isMounted) return null;

  return (
    <Card className="p-4 mb-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        events={events}
        editable={true}
        selectable={true}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        weekNumbers={true}
        weekNumberCalculation="ISO"
        firstDay={1} // Monday
        eventAdd={handleAddEvent}
      />
    </Card>
  );
}
