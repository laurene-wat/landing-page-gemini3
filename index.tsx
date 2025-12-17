// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Export pour vite-plugin-ssg: utilisé pendant le build pour générer le HTML
export const createApp = () => <App />;

// Hydratation côté navigateur
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
