AutoForm.hooks({
    newWish: {
        onSuccess: function(formType, result) {
            FlowRouter.go('wish');
        }
    }
});