const { Kafka } = require('kafkajs');

const kafka = new Kafka({ brokers: [process.env.KAFKA_BROKER || 'localhost:9092'] });
const producer = kafka.producer();

exports.publishParityEvent = async function(number, aiResult) {
  await producer.connect();
  await producer.send({
    topic: 'events.parity',
    messages: [
      {
        value: JSON.stringify({
          type: 'ParityDeterminedEvent',
          number,
          ...aiResult,
          timestamp: new Date().toISOString(),
        }),
      },
    ],
  });
  await producer.disconnect();
};
