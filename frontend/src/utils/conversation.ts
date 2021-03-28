export function getConversation() {
  window.$dispatch({type: 'setConversationList', payload: []})
}
