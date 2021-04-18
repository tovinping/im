export * as global from './global'
export * as conversation from './conversation'
export function getRandomStr() {
  return Math.random().toString(32).slice(2)
}