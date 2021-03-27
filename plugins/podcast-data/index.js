const axios = require('axios');
const qs = require('qs');
require('dotenv').config(); // because docusaurus2-dotenv plugin doesn't work here

module.exports = function (context, options) {
  return {
    name: 'podcast-data',

    async loadContent() {
      const token = await getAuthToken();
      const episodes = await getEpisodes(token);
      return episodes;
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ episodes: content });
    },
  };
};

async function getAuthToken() {
  console.log('[plugin:podcast-data] getting auth token from spotify');

  const request = {
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization: `Basic ${process.env.SPOTIFY_SECRET}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      grant_type: 'client_credentials',
    }),
  };

  const response = await axios(request);
  return response.data && response.data.access_token;
}

async function getEpisodes(authToken) {
  console.log('[plugin:podcast-data] fetching episodes for the show x_change from spotify');

  const request = {
    method: 'get',
    url: 'https://api.spotify.com/v1/shows/2Egg7gR6XSCCmjn1k1cLQy/episodes?market=US',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const response = await axios(request);
  const episodes = response.data && response.data.items;

  console.log(`[plugin:podcast-data] fetched ${episodes.length} episodes`);

  return episodes;
}
