Template.ownerOnly.helpers({
    ownDocument() {
        return (Meteor.userId() === Template.instance().data.doc.owner_id) ||
                Modules.both.utilities.userZarazi();
    }
})