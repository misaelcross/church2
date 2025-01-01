'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

type BreadcrumbItem = {
  title: string;
  link: string;
};

// This allows to add custom title as well
const routeMapping: Record<string, BreadcrumbItem[]> = {
  '/dashboard': [{ title: 'Painel', link: '/dashboard' }],
  '/dashboard/employee': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Membros', link: '/dashboard/employee' }
  ],
  '/dashboard/product': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Igrejas', link: '/dashboard/product' }
  ],
  '/dashboard/overview': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Visão Geral', link: '/dashboard/overview' }
  ],
  '/dashboard/kanban': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Kanban', link: '/dashboard/kanban' }
  ],
  '/dashboard/profile': [
    { title: 'Painel', link: '/dashboard' },
    { title: 'Perfil', link: '/dashboard/profile' }
  ]
  // Add more custom mappings as needed
};

export function useBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    // If no exact match, fall back to generating breadcrumbs from the path
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path
      };
    });
  }, [pathname]);

  return breadcrumbs;
}