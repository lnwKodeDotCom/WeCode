Meteor.methods({
    hello(me='there') {
        return `Hello ${me}`;
    },
    deletePost(id) {
        console.log('Delete post for id:', id);
        //TODO: implement post deletion

        return true;
    }

});