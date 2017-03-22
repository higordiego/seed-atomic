module.exports = (io)=>{
    
    io.on('connection', (socket) => {
        console.log('connected');

        socket.on('disconnect', () => {
            console.log('disconnected');
        });
    });
}