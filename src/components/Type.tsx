import React from 'react';
import {
  FaWater,
  FaBolt,
  FaLeaf,
  FaFeather,
  FaMagic,
  FaFire,
  FaSnowflake,
  FaBug,
  FaAnchor,
  FaGlobeAmericas,
  FaRadiation,
  FaGhost,
  FaDragon,
  FaUserNinja,
  FaAtom,
  FaUserTie,
} from 'react-icons/fa';
import styled from 'styled-components';
import { IconType } from 'react-icons/lib/cjs';

interface IIcon {
  icon: IconType;
  color: string;
}

interface IType {
  [index: string]: IIcon;
}

const types: IType = {
  Water: {
    icon: FaWater,
    color: '#1E88E5',
  },
  Electric: {
    icon: FaBolt,
    color: '#FBC02D',
  },
  Grass: {
    icon: FaLeaf,
    color: '#388E3C',
  },
  Fighting: {
    icon: FaFeather,
    color: '#5D4037',
  },
  Fairy: {
    icon: FaMagic,
    color: '#FBC02D',
  },
  Fire: {
    icon: FaFire,
    color: '#F57C00',
  },
  Ice: {
    icon: FaSnowflake,
    color: '#1976D2',
  },
  Bug: {
    icon: FaBug,
    color: '#000',
  },
  Steel: {
    icon: FaAnchor,
    color: '#616161',
  },
  Ground: {
    icon: FaGlobeAmericas,
    color: '#5D4037',
  },
  Poison: {
    icon: FaRadiation,
    color: '#512DA8',
  },
  Ghost: {
    icon: FaGhost,
    color: '#616161',
  },
  Flying: {
    icon: FaFeather,
    color: '#5D4037',
  },
  Rock: {
    icon: FaAnchor,
    color: '#616161',
  },
  Dragon: {
    icon: FaDragon,
    color: '#E64A19',
  },
  Dark: {
    icon: FaUserNinja,
    color: '#616161',
  },
  Psychic: {
    icon: FaAtom,
    color: '#E64A19',
  },
  Normal: {
    icon: FaUserTie,
    color: '#000',
  },
};

const Bage = styled.div`
  display: flex;
  padding: 3px 6px;
  background-color: ${({ name }: IProps) => types[name].color};
  border-radius: 10px;
  color: #fff;
`;

const Name = styled.span`
  margin-left: 3px;
`;

interface IProps {
  name: string;
}

const Type = ({ name }: IProps) => (
  <Bage name={name}>
    <Icon I={types[name].icon} />
    <Name>{name}</Name>
  </Bage>
);

interface IIconProps {
  I: IconType;
}
// eslint-disable-next-line react/prop-types
const Icon = ({ I }: IIconProps) => <I color="#fff" />;

export default Type;
