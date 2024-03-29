import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { PlacesToStay } from '../shared/PlacesToStay';
import { StaticRouter } from 'react-router-dom';

export const renderAppMarkupAndStyles = async () => {
  const sheet = new ServerStyleSheet();
  let html;
  let styles;
  let data;
  try {
    data = await PlacesToStay.getData();
    // The StaticRouter is present ONLY so that React Router won't throw a compile error - any usages of <Link />
    // within this app have to be wrapped in a router. All actual routing is handled by the parent app
    html = renderToString(sheet.collectStyles(
      <StaticRouter>
        <PlacesToStay {...data} />
      </StaticRouter>
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
