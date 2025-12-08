// Fix: Import React to resolve namespace error
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  imageComponent: React.ReactNode; 
  colSpan?: number;
}

export interface LinkItem {
  id: string;
  text: string;
  url: string;
  isExternal: boolean;
}

export interface ResourceItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
}