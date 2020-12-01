const router = require('express').Router();
let AddItems = require('../models/addItems.model');
//AddItems is the schema
//CRUD Operations:
router.route('/').get((req, res) => {
  AddItems.find()
  .then(items => res.json(items))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
  const itemName = req.body.itemName;
  const category = req.body.category;
  const description = req.body.description;
  const newItem = new AddItems ({
    itemName,
    category,
    description
  });
  newItem.save()
  .then(() => res.json("Item Added!"))
  .catch(err => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
  AddItems.findById(req.params.id)
  .then(items => res.json(items))
  .catch(err => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  AddItems.findByIdAndDelete(req.params.id)
  .then(() => res.json('Item is deleted!'))
  .catch(err => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
  AddItems.findById(req.params.id)
  .then(items => {
    items.itemName = req.body.itemName;
    items.category = req.body.category;
    items.description = req.body.description;
    items.save()
    .then(() => res.json("Item is updated!"))
    .catch(err => res.status(400).json('Error: ' + err));
  })
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;