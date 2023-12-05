const Patient = require('../models/Patient');
const Region = require('../models/Region');

const PatientMiddleware = require('../middlewares/PatientMiddleware');

module.exports = {
  async index(req, res) {
    const patient = await Patient.findAll({
      include: [
        {
          model: Region,
          attributes: ['name'],
          as: 'region',
        },
      ],
    });
    return res.json(patient);
  },

  async store(req, res) {
    const { name, age, cpf, gender, health_condition, region_id } = req.body;

    if (!PatientMiddleware.verifyAge(age)) {
      return res.status(400).json({ erro: 'Invalid age' });
    }
    const patient = await Patient.create({
      name,
      age,
      cpf,
      gender,
      health_condition,
      region_id,
    });

    return res.json(patient);
  },

  async show(req, res) {
    const { id } = req.params;
    const patient = await Patient.findByPk(id);

    if (!patient) {
      return res.status(400).json({ erro: 'Patients not found' });
    }

    return res.json(patient);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, age, cpf, gender, health_condition, region_id } = req.body;

    const patient = await Patient.update({
      name,
      age,
      cpf,
      gender,
      health_condition,
      region_id,
    }, {
      returning: true,
      where: {
        id,
      },
    });

    if (!patient) {
      return res.status(400).json({ erro: 'Patient not found' });
    }
    return res.json(patient);
  },

  async delete(req, res) {
    const { id } = req.params;
    const patient = await Patient.destroy({
      where: {
        id,
      },
    });

    if (!patient) {
      return res.status(400).json({ erro: 'Patient not found' });
    }
    return res.status(200);
  },

}