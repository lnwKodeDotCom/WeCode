Template.postPage.onCreated( () => {
    var t = Template.instance();
    t.post_id = FlowRouter.getParam('id');
    t.autorun(()=>{
        t.subscribe('listForId', t.post_id );
    });
});

Template.postPage.helpers({
    post() {
        return List.findOne();
    }
});