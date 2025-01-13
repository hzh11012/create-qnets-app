import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/custom/theme-provider';
import router from '@/routes';
import '@/style/index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            storageKey="qnets-ui-theme"
            disableTransitionOnChange
        >
            <RouterProvider router={router} />
            <Toaster />
        </ThemeProvider>
    </StrictMode>
);
