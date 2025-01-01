import PageContainer from '../../../../components/layout/page-container';
import { buttonVariants } from '../../../../components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '../../../../lib/utils';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../../../../components/ui/card';

export default function VideosPage() {
  return (
    <PageContainer scrollable>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            Vídeos 🎥
          </h2>
          <Link
            href={'/dashboard/videos/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Novo vídeo
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-col space-y-1">
              <CardTitle className="text-sm font-medium">
                Vídeos Publicados (Mês)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                3 novos esta semana
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col space-y-1">
              <CardTitle className="text-sm font-medium">
                Visualizações (Mês)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2K</div>
              <p className="text-xs text-muted-foreground">
                +15% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col space-y-1">
              <CardTitle className="text-sm font-medium">
                Total de Vídeos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                Desde 2021
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col space-y-1">
              <CardTitle className="text-sm font-medium">
                Último Vídeo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15/12</div>
              <p className="text-xs text-muted-foreground">
                "Mensagem de Natal"
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-4">
          <div className="rounded-md border" style={{ marginTop: 'calc(1rem * calc(1 - var(--tw-space-y-reverse)))' }}>
            <div className="w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Data</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Título</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Duração</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Visualizações</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle">15/12/2023</td>
                  <td className="p-4 align-middle">Mensagem de Natal</td>
                  <td className="p-4 align-middle">45:12</td>
                  <td className="p-4 align-middle">1.2K</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Publicado
                    </span>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle">14/12/2023</td>
                  <td className="p-4 align-middle">Estudo Bíblico</td>
                  <td className="p-4 align-middle">30:45</td>
                  <td className="p-4 align-middle">850</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Publicado
                    </span>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle">13/12/2023</td>
                  <td className="p-4 align-middle">Louvor e Adoração</td>
                  <td className="p-4 align-middle">1:02:15</td>
                  <td className="p-4 align-middle">1.5K</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Publicado
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
