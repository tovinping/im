declare global {
  interface Window {
    NodeBridge: {
      closeWindow(): void
      miniSize(): void
      maxSize(): void
      normalSize(): void
    }
    handleBroadcast<T = any>(channel: string, payload?: T): void
  }
}
export {}
