Template.showComment.onCreated(()=>{
    const t = Template.instance();
    t.docId = t.data.doc._id;
    t.autorun(()=>{
        t.subscribe('commentsForDocId', t.docId);
    });
});

Template.showComment.helpers({
    comments() {
        return Comments.find().fetch();
    }
});