AutoForm.hooks({
    addPostForm: {
        onSuccess: function(formType, result) {
            FlowRouter.go('posts');
        }
    }
});