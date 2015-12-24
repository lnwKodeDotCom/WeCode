Meteor.publish('comments', function() {
    return Comments.find();
});

Meteor.publish('commentsForDocId', function(docId) {
    return Comments.find({for_document_id: docId});
});