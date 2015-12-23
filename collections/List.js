List = new Meteor.Collection( 'List' );

List.allow({
    insert: (userId, document) => true,
    update: (userId, document) => document.owner_id === Meteor.userId(),
    remove: (userId, document) => false
});

List.deny({
    insert: (userId, document) => false,
    update: (userId, document) => false,
    remove: (userId, document) => false
});

List.schema = new SimpleSchema({

    title: {
        type: String,
        label: 'Title',
        optional: false,
        min: 5,
    },

    description: {
        type: String,
        label: 'Details',
        optional: true,
        max: 1000,
        autoform: {
            type: 'markdown',
            rows: 10,
        }
    },

    owner_id: {
        type: String,
        optional: true,
        autoValue: function() {
            const userId = Meteor.userId() || '';
            if (this.isInsert) {
                return userId;
            } else if (this.isUpsert) {
                return {$setOnInsert: userId};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        },
        autoform: {
            omit: true,
        }
    },

    date_created: {
        type: Date,
        optional: true,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        },
        autoform: {
            omit: true,
        }

    }
});

List.attachSchema( List.schema );
