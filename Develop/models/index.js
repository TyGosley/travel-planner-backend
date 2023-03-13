const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_trips'
});

// ✅ define the Location table's relationship to Traveller
Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'location_travellers'
})

module.exports = { Traveller, Location, Trip };
