// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('click', () => {
  const arr = [1, 2, 3, 4, 5]
  console.log('window on click', arr)
})
export {}
