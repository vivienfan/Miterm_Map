'use strict';

const express = require('express');
const router  = express.Router();

module.exports = (dataHelper, utility) => {
  // method: get
  // URL: /profiles/:username
  // client input: req.param
  // server output: none
  //
  // render to profile page
  router.get('/:username', (req, res) => {
    let username = req.params.username;
    let email = req.params.email;
    let contribution = [];
    let favourite = [];

    dataHelper.getAllFavouritesByUsername(username, (err, favs) => {
      if(err) {
        res.status(400).send(err);
        return;
      }
      favourite = favs;
    })
    .then(() => {
      console.log('get all contribution');
      return dataHelper.getContributionsByUsername(username, (err, contrs) => {
        if(err) {
          res.status(400).send(err);
          return;
        }
        contribution = contrs;
      })
    })
    .then(() => {
      console.log('render page');
      let tempVar = {
        username: username,
        favouriteLists: favourite,
        contributedLists: contribution,
        canEdit: (username === req.session.username)
      };
      console.log(tempVar);
      res.render('../views/profile', tempVar);
    })
    .catch((err) => {
      console.error(err);
      return;
    });
  });


  return router;
}
