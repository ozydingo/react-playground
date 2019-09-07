import React from 'react';

import ItemTemplate from 'components/playing-with-children/ItemTemplate';
import TemplatedList from 'components/playing-with-children/TemplatedList';

function PlayingWithChildren() {
  const items = ['Uh oh', 'Not again', 'Rats...']
  return (
    <TemplatedList template={(<ItemTemplate />)}>
      {items}
    </TemplatedList>
  )
}

export default PlayingWithChildren
