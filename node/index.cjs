const express = require('express');
const cors = require('cors');
const axios = require('axios');



const app = express();
app.use(cors());

app.get('/autocomplete/:query', async (req, res) => {
  try {
    const { query } = req.params;
    const response = await axios.get(`https://suggestqueries.google.com/complete/search?output=toolbar&q=${query}`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving autocomplete suggestions.');
  }
});

app.use(express.static(`${__dirname}/build`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
