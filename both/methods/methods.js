Meteor.methods({
    hello(me='there') {
        return `Hello ${me}`;
    },
    deletePost(id) {
        List.remove(id);
        return true;
    }

});