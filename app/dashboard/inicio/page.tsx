'use client'
import { useState } from 'react'
import { Card } from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { 
  LayoutDashboard,
  FileText,
  Video,
  Calendar,
  IdCard
} from 'lucide-react'
import PageContainer from '../../../components/layout/page-container'

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${day}/${month}/${year} ás ${hours}:${minutes}`;
}

export default function InicioPage() {
  const videos = [
    'https://www.youtube.com/embed/K-powOlj0Oo',
    'https://www.youtube.com/embed/Cnc7aErj1O8'
  ]

  const sections: { name: string; icon: 'dashboard' | 'page' | 'media' | 'calendar' | 'idCard' }[] = [
    { name: 'Contribuições', icon: 'dashboard' },
    { name: 'Bíblia e Harpa', icon: 'page' },
    { name: 'Vídeos', icon: 'media' },
    { name: 'Eventos', icon: 'calendar' },
    { name: 'Cartão de Membro', icon: 'idCard' }
  ]

  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);

  const events = [
    {
      title: 'Culto de Celebração',
      date: '2023-12-15T19:00:00',
      image: 'https://i.pinimg.com/474x/4b/6b/72/4b6b72c0e3ef62898cb07bdba3c6bfa6.jpg'
    },
    {
      title: 'Escola Bíblica', 
      date: '2023-12-17T09:30:00',
      image: 'https://i.pinimg.com/474x/67/8a/05/678a05771460f498869f73a94866ca26.jpg'
    },
    {
      title: 'Culto de Oração',
      date: '2023-12-20T20:15:00',
      image: 'https://i.pinimg.com/474x/19/fa/fe/19fafed904b18e8d9a3d5800549632df.jpg'
    },
    {
      title: 'Retiro Espiritual',
      date: '2023-12-22T08:45:00',
      image: 'https://i.pinimg.com/474x/9c/27/48/9c27482e221a9cba25a8401e98a151c4.jpg'
    },
    {
      title: 'Conferência de Jovens',
      date: '2023-12-25T18:30:00',
      image: 'https://i.pinimg.com/474x/09/7f/28/097f284fea30f1c3400e15a62eec2216.jpg'
    },
    {
      title: 'Encontro de Casais',
      date: '2023-12-28T19:30:00',
      image: 'https://i.pinimg.com/474x/82/6f/db/826fdb6438f5e108c7c38206c00eb1ae.jpg'
    },
    {
      title: 'Culto de Ação de Graças',
      date: '2023-12-30T18:00:00',
      image: 'https://i.pinimg.com/474x/55/77/53/557753ad9073e7668ae81e33666a4202.jpg'
    },
    {
      title: 'Vigília de Ano Novo',
      date: '2023-12-31T22:00:00',
      image: 'https://i.pinimg.com/474x/a0/8f/6d/a08f6d50597ccc1994a33c2ece2b7fd9.jpg'
    }
  ]

  const handleNext = () => {
    setFirstVisibleIndex((prev) => 
      prev + 1 > events.length - 5 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setFirstVisibleIndex((prev) => 
      prev - 1 < 0 ? events.length - 5 : prev - 1
    );
  };

  const visibleEvents = events.slice(firstVisibleIndex, firstVisibleIndex + 5);

  const contributions = [
    {
      date: '13/12/2023',
      category: 'Dízimo',
      value: 'R$ 100,00',
      status: 'Confirmado'
    }
  ]

  return (
    <PageContainer scrollable>
      <div className="space-y-6 p-4">
        {/* Seção de Vídeos */}
        <div className="grid grid-cols-2 gap-4">
          {videos.map((video, i) => (
            <div key={i} className="rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="315"
                src={video}
                title={`Vídeo ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        {/* Seções Navegáveis */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {sections.map((section, i) => {
            const Icon = {
              'dashboard': LayoutDashboard,
              'page': FileText,
              'media': Video,
              'calendar': Calendar,
              'idCard': IdCard
            }[section.icon]
            return (
              <Button
                key={i}
                variant="outline"
                className="h-24 flex-col gap-2"
              >
                <Icon className="h-6 w-6" />
                <span className="text-lg">{section.name}</span>
              </Button>
            )
          })}
        </div>

        {/* Eventos Futuros */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Eventos Futuros</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={handlePrev}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleNext}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${firstVisibleIndex * (100 / 5)}%)` }}>
              {events.map((event, i) => (
                <div key={i} className="min-w-[20%] flex flex-col px-2">
                  <div className="w-full aspect-[4/5] rounded-lg overflow-hidden mb-2">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-sm">{event.title}</h3>
                  <p className="text-xs text-gray-500">{formatDate(event.date)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contribuições Recentes */}
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4">Contribuições Recentes</h2>
          <div className="space-y-2">
            {contributions.map((contribution, i) => (
                <div key={i} className="flex justify-between p-2 rounded-lg">
                <div>
                  <p className="font-medium">{contribution.date}</p>
                  <p className="text-sm text-gray-500">{contribution.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{contribution.value}</p>
                  <p className="text-sm text-gray-500">{contribution.status}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageContainer>
  )
}
