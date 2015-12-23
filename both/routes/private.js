const privateSection = FlowRouter.group({
    name: 'private'
});

privateSection.route('/private', {
    name: 'privateDemo',
    action() {
        BlazeLayout.render('default', {main: 'privatePage'});
    }
});

privateSection.route('/add', {
    name: 'addPost',

    action() {
        BlazeLayout.render('default', {main: 'addPostPage'});
    }
});

privateSection.route('/post/:id/edit', {
    name: 'editPost',
    action() {
        BlazeLayout.render('default', {main: 'editPostPage'});
    }
})

