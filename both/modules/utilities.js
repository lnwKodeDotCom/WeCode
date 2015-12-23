const _string2slug = (str='') => {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeeiiiiooooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
};

const _userEmail = () => {
    const user = Meteor.user();
    if (user && user.emails && user.emails.length>0 && user.emails[0] && user.emails[0].address) {
        return user.emails[0].address;
    } else {
        return '';
    }
};

const _userZarazi = () => {
    return Modules.both.utilities.userEmail()==='zarazi@gmail.com';
}

Modules.both.utilities = {};
Modules.both.utilities.string2slug = _string2slug;
Modules.both.utilities.userEmail = _userEmail;
Modules.both.utilities.userZarazi = _userZarazi;