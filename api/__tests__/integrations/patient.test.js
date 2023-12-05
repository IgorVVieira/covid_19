require('../../src/database'); // Pega método estático init do Model

const Patient = require('../../src/models/Patient');

describe('Patients', () => {
  it('should create patient', async () => {
    const patient = await Patient.create({
      name: 'Lucia Freitas',
      age: 50,
      cpf: '78956321456',
      gender: 'FEMININO',
      health_condition: 'ÓBITO',
      region_id: 1,
    });

    expect(patient.age).toBe(50);
  });

  it('should list all patients', async () => {
    const patients = await Patient.findAll();

    expect(patients.length).not.toBe(0);
  });

  it('should list one patient', async () => {
    let id = 1;
    const patient = await Patient.findByPk(id);

    expect(patient.id).toBe(id);
  });

  it('it should not find one patient', async () => {
    let id = 10000;
    const patient = await Patient.findByPk(id);

    expect(patient).toBeNull();
  });
});
