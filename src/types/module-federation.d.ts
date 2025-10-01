declare module 'auth/Auth' {
    import type { Container } from 'react-dom/client';

    export function mount(rootElement: Container): void;
}