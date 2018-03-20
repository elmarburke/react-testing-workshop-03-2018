import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import { Emoji } from '../Emoji';


export function EmojiList({ names }) {
  return (
    <React.Fragment>
      {names.map(({ id, name }) => <Emoji key={id} shortName={name} />)}
    </React.Fragment>
  );
}

EmojiList.propTypes = {
  names: arrayOf(shape({ name: string.isRequired, id: number.isRequired }))
    .isRequired
};
