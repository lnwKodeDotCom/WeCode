Meteor.publish('comments', function() {
    return Comments.find();
});

Meteor.publish('commentsForDocId', function(docId) {
    const
        _comments = Comments.find({document_id: docId},{sort:{date_created:1}}),
        comments = _comments.fetch(),
        commenterIds = _.pluck(comments, 'owner_id'),
        _users = Meteor.users.find({_id: {$in: commenterIds}}, {fields: {_id:1, emails:1}});

    return [
        _comments,
        _users
    ]
});