import request from 'supertest';
import { strict as assert } from 'node:assert';
import app from '../src/app.js';

describe('API EndPoints - Pruebas Completas', function () {
  this.timeout(10000);

  // Test para Metahumanos
  describe('Metahumanos', () => {
    it('GET /metahumano -> debe responder con JSON y status 200', async () => {
      const res = await request(app)
        .get('/metahumano')
        .expect('Content-Type', /json/)
        .expect(200);
      
      assert.ok(Array.isArray(res.body), 'La respuesta debe ser un array');
    });

    it('GET /metahumano/:id -> debe retornar un metahumano específico', async () => {
      // Asume que existe un metahumano con ID 1
      const res = await request(app)
        .get('/metahumano/MH0001')
        .expect('Content-Type', /json/);
      
      // Puede ser 200 (encontrado) o 404 (no encontrado)
      if (res.status === 200) {
        assert.ok(res.body, 'Debe retornar un metahumano');
        assert.ok(res.body.Id_MetaHumano || res.body.id, 'Debe tener ID');
      } else if (res.status === 404) {
        assert.ok(res.body.message, 'Debe tener mensaje de error');
      }
    });

    it('POST /metahumano -> debe crear un nuevo metahumano', async () => {
      const nuevoMetahumano = {
        Id_MetaHumano: 'MH999',
        Nombre_Metahumano: 'Test Hero',
        Alias: 'Test Alias',
        Tipo: 'Heroe',
        Actividad: 'Activo',
        Ultimo_Avistamiento: '2024-01-01'
      };

      const res = await request(app)
        .post('/metahumano')
        .send(nuevoMetahumano)
        .expect('Content-Type', /json/)
        .expect(201);
      
      assert.ok(res.body.message, 'Debe confirmar la creación');
    });
  });

  // Test para Habilidades
  describe('Habilidades', () => {
    it('GET /habilidad -> debe responder con JSON', async () => {
      const res = await request(app)
        .get('/habilidad')
        .expect('Content-Type', /json/);
      
      // Puede ser 200 (con datos) o 204 (sin contenido)
      if (res.status === 200) {
        assert.ok(Array.isArray(res.body), 'La respuesta debe ser un array');
      }
    });

    it('GET /habilidad/:id -> debe retornar una habilidad específica', async () => {
      const res = await request(app)
        .get('/habilidad/HB0001')
        .expect('Content-Type', /json/);
      
      if (res.status === 200) {
        assert.ok(res.body, 'Debe retornar una habilidad');
      } else if (res.status === 404) {
        assert.ok(res.body.message, 'Debe tener mensaje de error');
      }
    });
  });

  // Test de estructura de datos
  it('Los metahumanos deben tener la estructura correcta', async () => {
    const res = await request(app).get('/metahumano').expect(200);
    
    if (res.body.length > 0) {
      const metahumano = res.body[0];
      assert.ok(
        metahumano.Id_MetaHumano !== undefined || 
        metahumano.Nombre_Metahumano !== undefined ||
        metahumano.Alias !== undefined,
        'El metahumano debe tener propiedades básicas'
      );
    }
  });
});