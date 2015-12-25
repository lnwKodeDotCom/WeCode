Meteor.publish('list', function(showDraft=false) {
    const
        _non_draft = {$or:[{is_draft:false},{is_draft:{$exists:false}}]},
        _draft_and_owner = {is_draft:true, owner_id: this.userId},
        _conditions = showDraft ? {$or:[_non_draft, _draft_and_owner]} : _non_draft;

    const
        _list = List.find(_conditions),
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