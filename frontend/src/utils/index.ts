export * as global from './global'
export function getRandomStr() {
  return Math.random().toString(32).slice(2)
}