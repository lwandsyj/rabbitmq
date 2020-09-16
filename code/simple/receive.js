const amqp = require('amqplib')

async function recive(){
    
    const connection =await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue('test', {
        durable: true
      });
      channel.consume('test',(msg)=>{
          console.log(msg.content.toString())
      })
}

recive()