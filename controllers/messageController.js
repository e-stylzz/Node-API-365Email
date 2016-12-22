var messageController = function(messageService) {

    return {
        sendEmail: sendEmail
    };

    function sendEmail(req, res) {

        var ticket = req.body.id;
        var body = 'Something to display in the body of the email';
        var message = {
            to: req.body.to,
            subject: req.body.subject,
            body: body
        }

        messageService.sendEmail(message, function(err, data) {
            if (err) {
                console.log('Error', err);
                res.status(err.code).send(err.body);
            } else {
                res.status(200).send();
            }
        });

    }
};

module.exports = messageController;