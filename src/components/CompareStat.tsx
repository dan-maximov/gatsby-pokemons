import React from 'react';
import styled from 'styled-components';

export const CELL_WIDTH = 150;

const Title = styled.p`
  font-size: 13px;
  color: #9e9e9e;
`;

const Cell = styled.td`
  min-width: ${CELL_WIDTH}px;
  max-width: ${CELL_WIDTH}px;
`;

interface Stat {
  [key: string]: string;
}

interface Props {
  title: string;
  stats: Stat[];
  objKey: string;
}

const Stat: React.FC<Props> = ({ title, stats, objKey }) => (
  <>
    <tr>
      <td>
        <Title>{title}</Title>
      </td>
    </tr>
    <tr>
      {stats.map(p => (
        <Cell key={`${p[objKey]}${p.name}`}>{p[objKey]}</Cell>
      ))}
    </tr>
  </>
);

export default Stat;
