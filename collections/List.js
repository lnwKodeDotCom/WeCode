List = new Meteor.Collection( 'List' );

List.allow({
    insert: (userId, document) => true,
    update: (userId, document) => (document.owner_id === Meteor.userId()) || Modules.both.utilities.userZarazi(),
    remove: (userId, document) => false
});

List.deny({
    insert: (userId, document) => false,
    update: (userId, document) => false,
    remove: (userId, document) => false
});

List.schema = new SimpleSchema({

    //index_name: {
    //    type: String,
    //    optional: true,
    //    autoValue: function() {
    //        var name = this.field("title");
    //
    //        if(name.isSet)
    //        {
    //            return Modules.both.utilities.string2slug(name.value);
    //        }
    //        else
    //        {
    //            // Prevent user from supplying their own value
    //            this.unset();
    //        }
    //    },
    //    index: true,
    //    unique: true,
    //    autoform: {
    //        omit: true,
    //    }
    //},

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
        max: 3000,
        autoform: {
            type: 'markdown',
            rows: 10,
        }
    },

    tags: {
        type: [String],
        optional: true,
        max: 20,
        autoform: {
            type: "selectize",
            afFieldInput: {
                multiple: true,
                selectizeOptions: {
                    delimiter: ',',
                    persist: true,
                    create: true,
                    createOnBlur: true,
                }
            }
        },
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
    },

    date_updated: {
        type: Date,
        optional: true,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        autoform: {
            omit: true,
        }
    }
});

List.attachSchema( List.schema );

List.helpers({
    excerpt() {
        const MAX_LINES = 3;
        let lines = this.description.split('\n');
        return _.first(lines, MAX_LINES).join('\n');
    },
    ownerName() {
        return Modules.both.utilities.userName(this.owner_id);
    },

});