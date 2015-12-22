Template.postPage.onCreated( () => {
    var t = Template.instance();
    t.subscribe('listForId',FlowRouter.getParam('id'));
});

Template.postPage.helpers({
    post: () => {
        return List.findOne();
    }
});