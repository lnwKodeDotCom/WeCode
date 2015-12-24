var _closeCollapse = function(template) {
    var $collapseNav = template.$('.navbar-collapse.collapse');
    if ($collapseNav.hasClass('in'))
        $collapseNav.collapse('hide');
};

Template.navDefault.events({
    'click div.navbar-collapse.collapse li:not(.dropdown)>a': function(event, template) {
        _closeCollapse(template);
    },
    'click .navbar-brand': function(event, template) {
        _closeCollapse(template);
    }
});