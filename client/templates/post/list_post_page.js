Template.listPostPage.onCreated( () => {
    let t = Template.instance();
    t.autorun(() => {
        t.subscribe('list', !!Meteor.user());
    })

});

Template.listPostPage.helpers({
    title() {
        return 'Post List';
    },
    list() {
        return List.find().fetch();
    }

});