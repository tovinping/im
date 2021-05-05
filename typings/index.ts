export * from './conversation'
export * from './message'
export * from './user'
export * from './group'
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