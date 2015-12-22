FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('default', {main: 'homePage'});
    }
});

FlowRouter.route('/wish', {
    name: 'wish',

    action() {
        BlazeLayout.render('default', {main: 'wishPage'});
    }
});

FlowRouter.route('/wish/new', {
    name: 'newWish',

    action() {
        BlazeLayout.render('default', {main: 'newWishPage'});
    }
});