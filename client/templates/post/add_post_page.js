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