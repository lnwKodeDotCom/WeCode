FlowRouter.route('/private', {
    name: 'private',
    action() {
        BlazeLayout.render('default', {main: 'privatePage'});
    }
});