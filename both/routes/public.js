const publicSection = FlowRouter.group({
    name: 'public'
});

publicSection.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('default', {main: 'homePage'});
    }
});

publicSection.route('/posts', {
    name: 'posts',

    action() {
        BlazeLayout.render('default', {main: 'listPostPage'});
    }
});

publicSection.route('/post/:id', {
    name: 'post',
    action() {
        BlazeLayout.render('default', {main: 'postPage'});
    }
})
