Template.showPost.helpers({
});
Template.showPost.events({
    'click .btn-delete':(event, template) => {
        event.preventDefault();

        if(confirm('Really want to delete?')) {
            //TODO: disable UI
            Meteor.call('deletePost', FlowRouter.getParam('id'), (error, result) => {
                console.log('>> deletion error,result:', error, result);
                //TODO: pop message to user
                //TODO: enable UI
            })
        }
    }
});