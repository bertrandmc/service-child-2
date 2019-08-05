import { renderAppMarkupAndStyles } from './render-app-and-styles';

export const routeHandler = async (req, res) => {
    const { styleTags, markup, data } = await renderAppMarkupAndStyles({ location: req.url });
    res.status(200).send(`
      ${styleTags}
      ${markup}
      <script>window.PlacesToStayData = ${JSON.stringify(data)}</script>
    `);
};
