Template.listPostPage.onCreated( () => {
    var t = Template.instance();
    t.autorun(() => {
        t.subscribe('list');
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