Template.registerHelper('ownDocument', (doc) => {
    return (Meteor.userId() === doc.owner_id) ||
        Modules.both.utilities.userZarazi();
});

Template.registerHelper('nonDraft', (doc) => {
    if (!doc) return false;
    const
        isNonDraft = !doc.is_draft,
        isDraftButOwner = doc.is_draft && (Meteor.userId() === doc.owner_id);
    return isNonDraft || isDraftButOwner ||
        Modules.both.utilities.userZarazi();
});