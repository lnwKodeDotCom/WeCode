Meteor.publish('list', function() {
    return List.find();
});
