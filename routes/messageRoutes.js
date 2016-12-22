var express = require('express');
var messageService = require('../services/messageService')();
var messageController = require('../controllers/messageController')(messageService);
           
var routes = function() {
    var messageRouter = express.Router();
    
    //Post Routes
    messageRouter.post('/', messageController.sendEmail);
               
    return messageRouter;        
};

module.exports = routes;