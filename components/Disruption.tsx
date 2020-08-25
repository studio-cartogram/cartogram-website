import DateFormater from './date-formater';
import {Disruption as DisruptionType} from '../types';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({theme}) => theme.colors.primary};
  text-align: center;
  margin: 1em;
`;

const Heading = styled.h2`
  font-weight: bold;
`;

const Text = styled.p`
  margin-bottom: 1em;
`;

export function Disruption({title, date, excerpt, status}: DisruptionType) {
  return (
    <div>
      <Title>{title}</Title>
      <Text>
        <DateFormater dateString={date} />
      </Text>
      <Heading>Status</Heading>
      <Text>{status}</Text>
      <Heading>Summary</Heading>
      <Text>{excerpt}</Text>
    </div>
  );
}
