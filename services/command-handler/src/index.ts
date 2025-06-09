const { Kafka } = require('kafkajs');
const { publishParityEvent } = require('../services/eventPublisher');
const { callAiEvaluator } = require('../api/aiClient');

const kafka = new Kafka({ brokers: [process.env.KAFKA_BROKER || 'localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'command-handler-group' });

async function start() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'commands.parity', fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ message }) => {
      const command = JSON.parse(message.value.toString());
      // Persist ParityRequested event (not shown, but would go to MongoDB)
      const aiResult = await callAiEvaluator(command.number);
      await publishParityEvent(command.number, aiResult);
    },
  });
}

start().catch(console.error);
