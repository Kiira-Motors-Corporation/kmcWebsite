// controllers/userController.js
const { Specifications } = require('../models') // Adjust the path if needed



const createSpecification = async (req, res) => {
  try {
    const { seats } = req.body;
    const newSpecification = await Specifications.create({
      seats
    });
    res.status(201).json(newSpecification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating specification' });
  }
};




const getVehicleByType = async (req, res) => {
  const { type } = req.params;

  try {
    const vehicle = await Vehicles.findAll({ where: { type } });
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    res.status(200).json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching vehicle' });
  }
};

const getVehicleByTypeById = async (req, res) => {
  const { type,id } = req.params;

  try {
    const vehicle = await Vehicles.findAll({ where: { type,id } });
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    res.status(200).json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching vehicle' });
  }
};

const getVehicle= (req,res)=>{
  Vehicles.findAll().then((vehicle)=>{res.send(vehicle)}).catch((err)=>{if(err){console.log(err);}})

  }

const getVehicleById = async (req, res) => {
  const { id } = req.params;

  try {
    const vehicle = await Vehicles.findByPk(id);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.status(200).json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching vehicle' });
  }
};

const updateVehicle = async (req, res) => {
  const { id } = req.params;
  const { name, model, length, type,kind, image_path } = req.body;

  try {
    const vehicle = await Vehicles.findByPk(id);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    vehicle.name = name;
    vehicle.model = model;
    vehicle.length = length;
    vehicle.type = type;
    vehicle.kind = kind;
    vehicle.image_path = image_path;

    await vehicle.save();
    res.status(200).json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating vehicle' });
  }
};


const deleteVehicleById = async (req, res) => {
  const { id } = req.params;

  try {
    const vehicle = await Vehicles.findByPk(id);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    await vehicle.destroy();
    res.status(200).json({ message: 'Vehicle deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting vehicle' });
  }
};

  module.exports = {
     createSpecification,
    getVehicle,
    getVehicleById,
    getVehicleByType,
    getVehicleByTypeById,
    deleteVehicleById,
    updateVehicle
  };
