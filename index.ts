import express from 'express';

const app = express();
// Порт передаёт платформа в переменной PORT; без неё — 3000
const port = Number(process.env.PORT) || 3000;

app.get('/', (_req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
