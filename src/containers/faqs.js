import React from 'react';
import Accordion from 'components/accordion';
import faqsData from 'fixtures/faqs.json';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    </Accordion>
  );
}
