export * from './conversation'
export * from './message'
export * from './user'
declare global {
  interface Window {
    NodeBridge: {
      closeWindow(): void
      miniSize(): void
      maxSize(): void
      normalSize(): void
    }
  }
}