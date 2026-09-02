import request from 'supertest';
import app from '../app.js';

test('POST /produtos - deve criar um novo produto', async () => {
    const response = await request(app).post('/produtos').send({
        id : 1,
        nome: 'Niscal',
        marca: 'Não sabemos',
    })
    expect(response.statusCode).toBe(201)
    expect(response.body.nome).toBe('Niscal')
})  