FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('default', {main: 'homePage'});
    }
});

FlowRouter.route('/posts', {
    name: 'posts',

    action() {
        BlazeLayout.render('default', {main: 'listPostPage'});
    }
});

FlowRouter.route('/post/:id', {
    name: 'post',
    action() {
        BlazeLayout.render('default', {main: 'postPage'});
    }
})

FlowRouter.route('/add', {
    name: 'addPost',

    action() {
        BlazeLayout.render('default', {main: 'addPostPage'});
    }
});