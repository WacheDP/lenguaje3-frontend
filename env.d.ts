/// <reference types="vite/client" />
// Contenido mínimo esperado en vite-env.d.ts (o similar)

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}