import { gql } from '@apollo/client';

export const PARITY_QUERY = gql`
  query ParityOf($number: Int!) {
    parityOf(number: $number) {
      isEven
      evaluatedBy
      timestamp
      rawAiResponse
    }
  }
`;
