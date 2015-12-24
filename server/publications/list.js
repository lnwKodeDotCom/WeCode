Meteor.publish('list', function() {
    const
        _list = List.find(),
        list = _list.fetch(),
        writerIds = _.pluck(list, 'owner_id'),
        _users = Meteor.users.find({_id: {$in: writerIds}}, {fields: {_id:1, emails:1}});

    return [
        _list,
        _users
    ];
});

Meteor.publish('listForId', function(id) {
    const
        _list = List.find(id),
        list = _list.fetch(),
        writerIds = _.pluck(list, 'owner_id'),
        _users = Meteor.users.find({_id: {$in: writerIds}}, {fields: {_id:1, emails:1}});

    return [
        _list,
        _users
    ];
});