import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { shortnameToUnicode } from 'emojione';

const EmojiWrapper = styled.div`
display: inline-block;
  border: 2px solid black;
  margin: 1px;
  padding: 2px;
  border-radius: 5px;
`;

export function Emoji({ shortName }) {
  const emoji = shortnameToUnicode(`:${shortName}:`);

  return <EmojiWrapper>{emoji}</EmojiWrapper>;
}

Emoji.propTypes = {
  shortName: string.isRequired
};
