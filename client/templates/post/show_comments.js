Template.showComments.onCreated(()=>{
    const t = Template.instance();
    t.docId = t.data.doc._id;
    t.autorun(()=>{
        t.subscribe('commentsForDocId', t.docId);
    });
});

Template.showComments.helpers({
    comments() {
        return Comments.find().fetch();
    }
});