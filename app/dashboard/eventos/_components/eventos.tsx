import PageContainer from '../../../../components/layout/page-container';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../../../../components/ui/card';
import FullCalendar from './full-calendar';
import GoogleCalendar from './google-calendar';

export default function EventosPage() {
  return (
    <PageContainer scrollable>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">
          Eventos
        </h2>
        <FullCalendar />
        <GoogleCalendar />
      </div>
    </PageContainer>
  );
}
