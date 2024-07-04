import request from 'supertest';
import express from 'express';

const app = express();
app.get('/test', (req, res) => {
	res.status(200).send('Test route');
});

test('GET /test', async () => {
	const response = await request(app).get('/test');
	expect(response.status).toBe(200);
	expect(response.text).toBe('Test route');
});
