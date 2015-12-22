Template.wishPage.onCreated( () => {

});

Template.wishPage.helpers({
    title() {
        return 'Sample Wish List';
    },
    listAll() {
        return List.find().fetch();
    }

});