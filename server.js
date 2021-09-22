import express from 'express';

const app = express()

app.use(express.static('./dist/'))

const server = app.listen(3000);