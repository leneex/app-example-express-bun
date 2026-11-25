import express from 'express';

const app = express();
// The platform passes the port in the PORT variable; 3000 by default
const port = Number(process.env.PORT) || 3000;

app.get('/', (_req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
