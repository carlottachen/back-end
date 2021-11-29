
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/users', (request, response) => {
	let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
	response.status(200).send(friends);
});

app.get("/weather/:temperature", (request, response) => {
	const phrase = 
		`<h3>It was ${request.params.temperature} today</h3>`;
	response.status(200).send(phrase);

});

app.listen(4000, () => console.log("server is running on port 4000"));
