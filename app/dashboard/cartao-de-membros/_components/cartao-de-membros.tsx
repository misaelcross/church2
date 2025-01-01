ikjimport PageContainer from '../../../../components/layout/page-container';
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

export default function CartaoDeMembrosPage() {
  return (
    <PageContainer scrollable>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            Cartão de Membros 🪪
          </h2>
          <Link
            href={'/dashboard/cartao-de-membros/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Novo membro
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-col space-y-1">
              <CardTitle className="text-sm font-medium">
                Membros Ativos
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
                Novos Membros (Mês)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">
                12 novos esta semana
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col space-y-1">
              <CardTitle className="text-sm font-medium">
                Total de Membros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.6K</div>
              <p className="text-xs text-muted-foreground">
                Desde 2021
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col space-y-1">
              <CardTitle className="text-sm font-medium">
                Último Cadastro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15/12</div>
              <p className="text-xs text-muted-foreground">
                "João Silva"
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
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Nome</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Data de Cadastro</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Igreja</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Categoria</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle">João Silva</td>
                  <td className="p-4 align-middle">15/12/2023</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Ativo
                    </span>
                  </td>
                  <td className="p-4 align-middle">Sede</td>
                  <td className="p-4 align-middle">Membro</td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle">Maria Oliveira</td>
                  <td className="p-4 align-middle">14/12/2023</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Ativo
                    </span>
                  </td>
                  <td className="p-4 align-middle">Filial 1</td>
                  <td className="p-4 align-middle">Visitante</td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle">Pedro Santos</td>
                  <td className="p-4 align-middle">13/12/2023</td>
                  <td className="p-4 align-middle">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Ativo
                    </span>
                  </td>
                  <td className="p-4 align-middle">Sede</td>
                  <td className="p-4 align-middle">Líder</td>
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
