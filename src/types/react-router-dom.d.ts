declare module 'react-router-dom' {
  import * as React from 'react';

  export interface RouteProps {
    path?: string;
    element?: React.ReactElement | null;
    children?: React.ReactNode;
  }

  export const BrowserRouter: React.FC<{ children?: React.ReactNode }>;
  export const Routes: React.FC<{ children?: React.ReactNode }>;
  export const Route: React.FC<RouteProps>;
  export const Link: React.FC<{ to: string; children?: React.ReactNode; replace?: boolean; state?: unknown; className?: string; style?: React.CSSProperties }>;
}
