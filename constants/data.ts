import { NavItem } from '../types';
export type { NavItem };

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type Product = {
  photo_url: string;
  name: string;
  leader: string;
  description: string;
  price: number;
  id: number;
};

export const products: Product[] = [
  {
    id: 1,
    photo_url: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
    name: 'Igreja do Bairro Jardim das Flores',
    leader: 'Pastor João Silva',
    description: 'Rua das Flores, 123 - Jardim das Flores, São Paulo/SP',
    price: 350
  },
  {
    id: 2,
    photo_url: 'https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg',
    name: 'Igreja do Bairro Vila Nova',
    leader: 'Pastora Maria Oliveira',
    description: 'Av. Principal, 456 - Vila Nova, Rio de Janeiro/RJ',
    price: 420
  },
  {
    id: 3,
    photo_url: 'https://images.pexels.com/photos/2694038/pexels-photo-2694038.jpeg',
    name: 'Igreja do Bairro Centro',
    leader: 'Pastor Carlos Souza',
    description: 'Praça Central, 789 - Centro, Belo Horizonte/MG',
    price: 280
  },
  {
    id: 4,
    photo_url: 'https://images.pexels.com/photos/2694039/pexels-photo-2694039.jpeg',
    name: 'Igreja do Bairro Jardim América',
    leader: 'Pastora Ana Costa',
    description: 'Rua das Palmeiras, 101 - Jardim América, Curitiba/PR',
    price: 310
  },
  {
    id: 5,
    photo_url: 'https://images.pexels.com/photos/2694040/pexels-photo-2694040.jpeg',
    name: 'Igreja do Bairro Nova Esperança',
    leader: 'Pastor Pedro Almeida',
    description: 'Av. da Esperança, 202 - Nova Esperança, Porto Alegre/RS',
    price: 390
  }
];

export const navItems: NavItem[] = [
  {
    title: 'Inicio',
    url: '/dashboard/inicio',
    icon: 'house',
    isActive: true
  },
  {
    title: 'Eventos',
    url: '/dashboard/eventos',
    icon: 'calendar',
    isActive: false
  },
  {
    title: 'Contribuições',
    url: '/dashboard/contribuicoes',
    icon: 'handCoins',
    isActive: false
  },
  {
    title: 'Bíblia e Harpa',
    url: '/dashboard/biblia',
    icon: 'bookOpen',
    isActive: false
  },
  {
    title: 'Membros',
    url: '/dashboard/employee',
    icon: 'users',
    shortcut: ['m', 'm'],
    isActive: false
  },
  {
    title: 'Igrejas',
    url: '/dashboard/product',
    icon: 'school',
    shortcut: ['i', 'i'],
    isActive: false
  },
  {
    title: 'Tesouraria',
    url: '/dashboard/overview',
    icon: 'dollarSign',
    shortcut: ['t', 't'],
    isActive: false
  },
  {
    title: 'Tarefas',
    url: '/dashboard/kanban',
    icon: 'clipboardCheck',
    shortcut: ['t', 't'],
    isActive: false
  },
  {
    title: 'Vídeos',
    url: '/dashboard/videos',
    icon: 'media',
    isActive: false
  },
  {
    title: 'Cartão de Membros',
    url: '/dashboard/cartao-de-membros',
    icon: 'user2',
    isActive: false
  },
  {
    title: 'Conta',
    url: '#',
    icon: 'billing',
    isActive: true,
    items: [
      {
        title: 'Perfil',
        url: '/dashboard/profile',
        icon: 'userPen',
        shortcut: ['p', 'p']
      },
      {
        title: 'Login',
        shortcut: ['l', 'l'],
        url: '/',
        icon: 'login'
      }
    ]
  }
];
