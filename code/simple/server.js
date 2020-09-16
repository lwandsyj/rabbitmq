const amqp=require('amqplib');

async function send(){
    const connection = await amqp.connect('amqp://localhost');

    const channel = await connection.createChannel();
    const queue = await channel.assertQueue('test',{
        durable:true
    });
    channel.sendToQueue('test',Buffer.from('hello rabbitmq'))
}

send()