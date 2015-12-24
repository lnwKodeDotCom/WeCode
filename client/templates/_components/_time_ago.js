Template._timeAgo.onCreated(()=>{
    let t = Template.instance();
    t.now = new ReactiveVar(new Date());
    t.handler = Meteor.setInterval(()=>{
        t.now.set(new Date());
    }, 60000);
});

Template._timeAgo.helpers({
    timeAgo() {
        let t = Template.instance();
        return moment(t.data.timestamp).from(t.now.get());
    }
});

Template._timeAgo.onDestroyed(()=>{
    let t = Template.instance();
    Meteor.clearInterval(t.handler);
});