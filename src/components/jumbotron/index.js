import React from 'react';
import {
  Container,
  Inner,
  TextPane,
  ImagePane,
  Title,
  SubTitle,
  Image,
  Item,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.TextPane = function JumbotronTextPane({ children, ...restProps }) {
  return <TextPane {...restProps}>{children}</TextPane>;
};

Jumbotron.ImagePane = function JumbotronImagePane({ children, ...restProps }) {
  return <ImagePane {...restProps}>{children}</ImagePane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};
