import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { PlacesToStay } from '../shared/PlacesToStay';

export const renderAppMarkupAndStyles = async () => {
  const sheet = new ServerStyleSheet();
  let html;
  let styles;
  let data;
  try {
    data = await PlacesToStay.getData();
    html = renderToString(sheet.collectStyles(
      <PlacesToStay {...data} />
    ));
    styles = sheet.getStyleTags();
  } catch (error) {
    console.error(error)
  } finally {
    sheet.seal()
  }
  return {
    html,
    styles,
    scriptUrls: ['http://localhost:3003/PlacesToStay.js'],
    data
  }
};
