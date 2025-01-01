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

export default function ContribuicoesPage() {
  return (
    <PageContainer scrollable>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            Contribuições 💰
          </h2>
          <Link
            href={'/dashboard/contribuicoes/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Nova contribuição
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-col space-y-1">
              <CardTitle className="text-sm font-medium">
                Meus Dízimos (Mês)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                  currency: 'BRL'
                }).format(1000)}
              </div>
              <p className="text-xs text-muted-foreground">
                2 contribuições este mês
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col space-y-1">
              <CardTitle className="text-sm font-medium">
                Minhas Ofertas (Mês)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                  currency: 'BRL'
                }).format(100)}
              </div>
              <p className="text-xs text-muted-foreground">
                1 contribuição este mês
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col space-y-1">
              <CardTitle className="text-sm font-medium">
                Total Contribuído (Ano)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                  currency: 'BRL'
                }).format(5800)}
              </div>
              <p className="text-xs text-muted-foreground">
                24 contribuições em 2023
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col space-y-1">
              <CardTitle className="text-sm font-medium">
                Última Contribuição
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15/12</div>
              <p className="text-xs text-muted-foreground">
                Dízimo - R$ 500,00
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-4">
          {/* Tabela de Contribuições */}
          <div className="rounded-md border" style={{ marginTop: 'calc(1rem * calc(1 - var(--tw-space-y-reverse)))' }}>
            <div className="w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Data</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Tipo</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Valor</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Igreja</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle">15/12/2023</td>
                  <td className="p-4 align-middle">Dízimo</td>
                  <td className="p-4 align-middle">R$ 500,00</td>
                  <td className="p-4 align-middle">Sede</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Confirmado
                    </span>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle">14/12/2023</td>
                  <td className="p-4 align-middle">Oferta</td>
                  <td className="p-4 align-middle">R$ 100,00</td>
                  <td className="p-4 align-middle">Sede</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Confirmado
                    </span>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle">13/12/2023</td>
                  <td className="p-4 align-middle">Dízimo</td>
                  <td className="p-4 align-middle">R$ 500,00</td>
                  <td className="p-4 align-middle">Sede</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Confirmado
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
