import socketIOClient from 'socket.io-client';
import { baseUrlSocket } from 'utils/config';

const url = baseUrlSocket || 'http://localhost:7001';

const socket = socketIOClient(url);

export default socket;
