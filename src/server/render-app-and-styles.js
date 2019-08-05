import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { PlacesToStay } from '../shared/PlacesToStay';

export const renderAppMarkupAndStyles = async () => {
  const sheet = new ServerStyleSheet();
  let markup;
  let styleTags;
  let data;
  try {
    data = await PlacesToStay.getData();
    markup = renderToString(sheet.collectStyles(
      <PlacesToStay {...data} />
    ));
    styleTags = sheet.getStyleTags();
  } catch (error) {
    console.error(error)
  } finally {
    sheet.seal()
  }
  return {
    markup,
    styleTags,
    data
  }
};
