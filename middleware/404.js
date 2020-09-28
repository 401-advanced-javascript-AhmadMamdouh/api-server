'use strict'


module.exports = (req, res ) => {
  res.status(404);
  res.StatusMessage('404 Not Found');
  res.json({error : 'Page Not Found !!'});
}




