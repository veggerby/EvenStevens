import React from 'react';
import { useQuery } from '@apollo/client';
import { PARITY_QUERY } from '../graphql/queries';

export default function ResultDisplay({ number }: { number: number }) {
  const { data, loading, error } = useQuery(PARITY_QUERY, { variables: { number } });
  if (loading) return <div>Consulting GPT-4, please wait for the AI to overthink...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data?.parityOf) return <div>No result yet. Kafka is probably busy.</div>;
  return (
    <div>
      <h2>Parity Result</h2>
      <p>Is Even: {data.parityOf.isEven ? 'Yes' : 'No'}</p>
      <p>Evaluated By: {data.parityOf.evaluatedBy}</p>
      <p>Timestamp: {data.parityOf.timestamp}</p>
      <pre>{data.parityOf.rawAiResponse}</pre>
    </div>
  );
}
