import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import NumberInput from './components/NumberInput';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [number, setNumber] = React.useState<number | null>(null);
  return (
    <ApolloProvider client={client}>
      <div style={{ padding: 40 }}>
        <h1>EvenStevens™ Parity Oracle</h1>
        <NumberInput onSubmit={setNumber} />
        {number !== null && <ResultDisplay number={number} />}
      </div>
    </ApolloProvider>
  );
}
export default App;
