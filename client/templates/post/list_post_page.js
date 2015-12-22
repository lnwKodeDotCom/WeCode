Template.listPostPage.onCreated( () => {

});

Template.listPostPage.helpers({
    title() {
        return 'Post List';
    },
    list() {
        return List.find().fetch();
    }

});