const routes = require('express').Router();

const PatientController = require('../src/controllers/PatientsController');

routes.get('/patients', PatientController.index);

routes.get('/patient/:id', PatientController.show);

routes.post('/patients', PatientController.store);

routes.put('/patient/:id', PatientController.update);

routes.delete('/patients/:id', PatientController.delete);

module.exports = routes;