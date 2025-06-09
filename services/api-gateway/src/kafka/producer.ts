import { Kafka } from 'kafkajs';

const kafka = new Kafka({ brokers: [process.env.KAFKA_BROKER || 'localhost:9092'] });
const producer = kafka.producer();

export async function sendDetermineParityCommand(number: number, jwt: string) {
  await producer.connect();
  await producer.send({
    topic: 'commands.parity',
    messages: [
      {
        value: JSON.stringify({
          type: 'DetermineParityCommand',
          number,
          jwt,
          timestamp: new Date().toISOString(),
        }),
      },
    ],
  });
  await producer.disconnect();
}
