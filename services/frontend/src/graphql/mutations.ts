import { gql } from '@apollo/client';

export const EVALUATE_IS_EVEN = gql`
  mutation EvaluateIsEven($number: Int!) {
    evaluateIsEven(number: $number)
  }
`;
