import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CELL_WIDTH = 150;

const Title = styled.p`
  font-size: 13px;
  color: #9e9e9e;
`;

const Wrapper = styled.tr`
  margin: 8px 0;
`;

const Row = styled.div`
  display: flex;
`;

const Cell = styled.td`
  min-width: ${CELL_WIDTH}px;
  max-width: ${CELL_WIDTH}px;
`;

const Stat = ({ title, stats, objKey }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Row>
      {stats.map(p => (
        <Cell key={`${p[objKey]}${p.name}`}>{p[objKey]}</Cell>
      ))}
    </Row>
  </Wrapper>
);

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  objKey: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.string,
      weight: PropTypes.string,
      damange: PropTypes.string,
      fleeRate: PropTypes.string,
      maxCP: PropTypes.string,
      maxHP: PropTypes.string,
      evolutionRequirements: PropTypes.string,
      classification: PropTypes.string,
    }),
  ).isRequired,
};

export default Stat;
