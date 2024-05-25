import { FolderSearch, Home, NotebookPen, PenLine, type LucideIcon } from 'lucide-react';

export const links: NavLink[] = [
  {
    title: 'Inicio',
    icon: Home,
    href: '/',
  },
  {
    title: 'Redactar',
    icon: PenLine,
    href: '/patients',
  },
  {
    title: 'Notas',
    icon: NotebookPen,
    href: '/appointments',
  },
  {
    title: 'Archivo',
    icon: FolderSearch,
    href: '/appointments',
  },
];

export type NavProps = {
  links: NavLink[];
  isCollapsed: boolean;
};

export type NavLink = {
  title: string;
  label?: string;
  icon: LucideIcon;
  href: string;
};
