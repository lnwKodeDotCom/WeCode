AutoForm.hooks({
    addCommentForm: {
        after: {
            insert: function(error, result) {}
        },
        onSuccess: function(formType, result) {
            const newId = result;
        }
    }
});