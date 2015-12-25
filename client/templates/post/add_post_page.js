Template.addPostPage.helpers({
    tags() {
        let items = [],
            options = _.map(items, function(t) {
                return {label:t, value:t};
            });
        return {
            delimiter: ',',
            persist: true,
            create: true,
            createOnBlur: true,

            items: items,
            options: options,
            labelField: 'label',
            valueField: 'label',
            searchField: ['label'],

        }
    }
});

Template.addPostPage.events({
    'click .btn-draft':(event, template)=>{
        $('input[name="is_draft"]').val('true');
        console.log('Saving draft');
    },
    'click .btn-cancel':(event, template)=>{
        template.$('.selectized')[0].selectize.clear();
        console.log('Clearing form');
    }
});

AutoForm.hooks({
    addPostForm: {
        after: {
            insert: function(error, result) {}
        },
        onSuccess: function(formType, result) {
            const newId = result;
            FlowRouter.go('post', {id: newId});
        }
    }
});