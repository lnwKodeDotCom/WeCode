Template.showPost.helpers({
    ownDocument(doc) {
        return (Meteor.userId() === doc.owner_id) ||
            Modules.both.utilities.userZarazi();
    }
});