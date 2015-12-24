AutoForm.hooks({
    addCommentForm: {
        after: {
            insert: function(error, result) {}
        },
        beginSubmit: function() {},
        endSubmit: function() {
            $('a[href="#markdown"]').tab('show');
        },
        onSuccess: function(formType, result) {
            const newId = result;
        }
    }
});