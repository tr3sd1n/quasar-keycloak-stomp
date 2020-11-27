import SockJS from 'sockjs-client'
import webstomp from 'webstomp-client'

const sock = SockJS('http://localhost:8080/ws')
const stomp = webstomp.over(sock)

export default ({ Vue }) => {
  Vue.prototype.$stomp = stomp
}
