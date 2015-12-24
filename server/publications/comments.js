Meteor.publish('comments', function() {
    return Comments.find();
});

Meteor.publish('commentsForDocId', function(docId) {
    return Comments.find({document_id: docId});
});