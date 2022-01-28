import React from 'react';
import jumboData from 'fixtures/jumbo';
import { Jumbotron } from 'components';

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.TextPane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.TextPane>
          <Jumbotron.ImagePane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.ImagePane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
