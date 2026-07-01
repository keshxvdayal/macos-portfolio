export interface NavLink {
  id: number;
  name: string;
  type: string;
}

export interface NavIcon {
  id: number;
  img: string;
}

export interface DockApp {
  id: string;
  name: string;
  icon: string;
  canOpen: boolean;
}

export interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface TechStackItem {
  category: string;
  items: string[];
}

export interface Social {
  id: number;
  text: string;
  icon: string;
  bg: string;
  link: string;
}

export interface PhotoLink {
  id: number;
  icon: string;
  title: string;
}

export interface GalleryItem {
  id: number;
  img: string;
}

export interface FileItem {
  id: number;
  name: string;
  icon: string;
  kind: 'file' | 'folder';
  fileType?: 'txt' | 'url' | 'img' | 'fig' | 'pdf';
  position?: string;
  windowPosition?: string;
  href?: string;
  imageUrl?: string;
  description?: string[];
  subtitle?: string;
  image?: string;
  children?: FileItem[];
}

export interface Location {
  id: number;
  type: string;
  name: string;
  icon: string;
  kind: 'folder';
  children: FileItem[];
}

export interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: FileItem | Location | null;
  isMaximized: boolean;
}

export type WindowConfig = {
  [key: string]: WindowState;
};
