Meteor.publish('list', function() {
    return List.find();
});

Meteor.publish('listForId', function(id) {
    return List.find(id);
});