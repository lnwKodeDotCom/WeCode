Template.editPostPage.onCreated( () => {
    let t = Template.instance();
    t.post_id = FlowRouter.getParam('id');
    t.autorun(()=>{
        t.subscribe('listForId', t.post_id );
    })
});

Template.editPostPage.helpers({
    post() {
        return List.findOne();
    },
    tags() {
        let items = List.findOne().tags,
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

AutoForm.hooks({
    editPostForm: {
        after: {
            update: function (error, result) {
            }
        },
        onSuccess: function (formType, result) {
            FlowRouter.go('post', {id: FlowRouter.getParam('id')});
        },
        onError: function(formType, error) {},
    }
});
