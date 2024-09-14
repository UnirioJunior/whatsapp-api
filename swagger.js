const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0', autoBody: false })

const outputFile = './swagger.json'
const endpointsFiles = ['./src/routes.js']

const doc = {
  info: {
    title: 'WhatsApp API',
    description: 'API Wrapper for WhatsAppWebJS'
  },
  host: '',
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'x-api-key'
    }
  },
  produces: ['application/json'],
  tags: [
    {
      name: 'Session',
      description: 'Handling multiple sessions logic, creation and deletion'
    },
    {
      name: 'Client',
      description: 'All functions related to the client'
    },
    {
      name: 'Message',
      description: 'May fail if the message is too old (Only from the last 100 Messages of the given chat)'
    }
  ],
  definitions: {
    StartSessionResponse: {
      success: true,
      message: 'Sessão iniciada com sucesso'
    },
    StatusSessionResponse: {
      success: true,
      state: 'CONECTADA',
      message: 'Sessão Conectada'
    },
    TerminateSessionResponse: {
      success: true,
      message: 'Desconectado com sucesso'
    },
    TerminateSessionsResponse: {
      success: true,
      message: 'Sessão terminada com sucesso'
    },
    ErrorResponse: {
      success: false,
      error: 'Algum erro no servidor'
    },
    NotFoundResponse: {
      success: false,
      error: 'Algum erro no servidor'
    },
    ForbiddenResponse: {
      success: false,
      error: 'Chave API inválida'
    }
  }
}

swaggerAutogen(outputFile, endpointsFiles, doc)
