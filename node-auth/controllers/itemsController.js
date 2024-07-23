// controllers/userController.js
// const db = require("../db/dbConfig")
const db = require("../models")
const {Items} = require("../models")


const getItems = (req,res)=>{
  Items.findAll().then((book)=>{res.send(book)}).catch((err)=>{if(err){console.log(err);}})

  }

  const createItem = async (req, res) => {
    const { name, image_path, description, price } = req.body;

    try {
      const newItem = await Items.create({
        name,
        price,
        description,
        image_path,
      });

      res.status(201).json(newItem);
    } catch (err) {
      console.error('Error adding item:', err);
      res.status(500).json({ error: 'Error adding item' });
    }
  };

// const createItem = (req, res) => {
//   Items.create({
//     name:"Guest Visibility Vests",
//     price:30000,
//     description:"Very light to wear",
//     image_path:"images/GuestVisibilityVests.png"
//   }).catch((err)=>{
//     if(err){
//       console.log(err);
//     }
//   })
//   res.send("Inserted")
//  }


const getItemById = async (req, res) => {
  try {
    const item = await Items.findByPk(req.params.id); // Find by primary key
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' });
    }
    res.json(item);
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ error: 'Error fetching item' });
  }
};

  module.exports = {
    getItems,
    getItemById,
    createItem
  };
