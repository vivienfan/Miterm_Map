'use strict';

const express = require('express');
const router  = express.Router();

module.exports = (dataHelper) => {
  router.get('/', (req, res) => {
<<<<<<< HEAD
    let uid = req.session.user_id;
    dataHelper.getAllContributionForUser(uid, (err, contributions) => {
      if (err) {
        res.status(500).send(err);
      } else {
        let arr = [];
        let contris = [];
        if (contributions) {
          contributions.forEach((element) => {
            arr.push(element.l_id);
            contris.push({title: element.title, descritpion:element.description});
          });
        }
        dataHelper.getAllPublicListsExcept(arr, (err, publics) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).json({contribution: contris, public: publics});
          }
        });
      }
    });
  });

  router.get('/:id', (req, res) => {
    let uid = req.session.user_id;
    dataHelper.getAllFavouritesForUser(uid, (err, arr) => {
      if(err) {
        res.status(500).send(err);
      } else {
        dataHelper.getContributionByListId(uid)
=======
    let username = req.body.username;

    dataHelper.getAllLists(username, (err, obj) => {
      if (err) {
        res.status(500).send();
      } else {
        res.status(200).json(obj);
>>>>>>> 2e8f7b49836173513db04f26ef14a91fbb69e34c
      }
    });
  });

  return router;
}
