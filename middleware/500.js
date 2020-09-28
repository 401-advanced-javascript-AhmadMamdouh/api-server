
'use strict'

module.exports = (req, res) => {
  console.log('BE Atenttion ERROR !!!')
  res.status(500);
  res.StatuesMessage = 'Error Server!!';
  res.json({ error: err });
}
