// controllers/userController.js
// const db = require("../db/dbConfig")
const db = require("../models")
const {Items} = require("../models")


// const getItems = (req, res) => {
//   const { min, max } = req.query;
//   let sql = "SELECT * FROM items";

//   if (min && max) {
//     sql += " WHERE id BETWEEN ? AND ?";
//   }
//   db.query(sql, [min, max], (err, results) => {
//     if (err) {
//       console.error("Error fetching items:", err);
//       res.status(500).json({ error: "Error fetching items" });
//     } else {
//       res.json(results);
//     }
//   });
// }


const getItems = (req,res)=>{
  Items.findAll().then((book)=>{res.send(book)}).catch((err)=>{if(err){console.log(err);}})

  }

const createItem = (req, res) => {
  Items.create({
    name:"za",
    price:9,
    description:"Mike",
    image_path:"Mike"
  }).catch((err)=>{
    if(err){
      console.log(err);
    }
  })
  res.send("Inserted")
 }


// const getSingleItem = (req, res) => {
//   const { id } = req.params;
//   const sql = "SELECT * FROM items WHERE id = ?";
//   db.query(sql, [id], (err, results) => {
//     if (err) {
//       console.error("Error fetching item:", err);
//       res.status(500).json({ error: "Error fetching item" });
//     } else if (results.length === 0) {
//       res.status(404).json({ error: "Item not found" });
//     } else {
//       res.json(results[0]);
//     }
//   });
// }


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
