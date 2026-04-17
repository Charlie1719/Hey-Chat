import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    ws.on('message', (data) => {
        console.log(`Recibido: ${data}`);
       
       
     
        wss.clients.forEach((client) => {
           
            if (client.readyState === 1) { // 1 significa OPEN
                client.send(data.toString());
            }
        });
    });

    ws.on('close', () => console.log('off'));
});

console.log('El invencible verano de Liliana');