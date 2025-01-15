import { FastifySchema } from 'fastify';

export const findAllExpedienteSchema: FastifySchema = {
  tags: ['Expediente'],
  summary: 'Obtener todos los Expedientes',
  description: 'Endpoint para obtener todos los Expedientes registradas en el sistema',
  response: {
    200: {
      description: 'Lista de Expedientes encontrados',
      type: 'array',
      items: {
        type: 'object',
        properties: {
            idExpediente: { type: 'integer', description: 'ID generado para el Expediente' },
            idDocumento: { type: 'integer', description: 'ID del Documento que soporta el Expediente' },
            idUsuario: { type: 'integer', description: 'ID del Usuario al que pertenece el Expediente' },
            fecha: { type: 'string', description: 'Indica cuando vence la Expediente' },
            url: { type: 'string', description: 'indica la direccion del Expediente' },
            estado: { type: 'string', description: 'indica el estado de la Expediente' },
        },
      },
    },
    400: {
      description: 'Solicitud inválida',
      type: 'object',
      properties: {
        error: { type: 'string', description: 'Tipo de error' },
        message: { type: 'string', description: 'Mensaje del error' },
      },
    },
  },
};
