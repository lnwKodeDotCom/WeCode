Comments = new Meteor.Collection( 'Comments' );

Comments.allow({
    insert: (userId, document) => !!Meteor.userId(),
    update: (userId, document) => (document.owner_id === Meteor.userId()) || Modules.both.utilities.userZarazi(),
    remove: (userId, document) => false
});

Comments.deny({
    insert: (userId, document) => false,
    update: (userId, document) => false,
    remove: (userId, document) => false
});

Comments.schema = new SimpleSchema({

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

    //title: {
    //    type: String,
    //    label: 'Title',
    //    optional: false,
    //    min: 5,
    //},

    document_id: {
        type: String,
        label: 'Document ID',
        autoform: {
            type: "hidden"
        }
    },

    description: {
        type: String,
        label: 'Details',
        min: 5,
        max: 1000,
        autoform: {
            type: 'markdown',
            rows: 5,
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

Comments.attachSchema( Comments.schema );

Comments.helpers({
    ownerName() {
        return Modules.both.utilities.userName(this.owner_id);
    },
    lastUpdatedFromNow() {
        return moment(this.date_updated ? this.date_updated : this.date_created).fromNow();
    },
    dateLastUpdated() {
        return this.date_updated ? this.date_updated : this.date_created;
    }
});

if (Meteor.isServer) {
    Comments.after.insert(function (userId, doc) {
        let userName = Modules.both.utilities.userName(userId),
            path = FlowRouter.path('post', {id: doc.document_id}).substring(1),
            comment = doc.description.substring(0,100),
            fields = [{title:'comment', value:comment}];
        Modules.slack.sendToSlack('ment',userName,Meteor.absoluteUrl(path),fields);
    });
}