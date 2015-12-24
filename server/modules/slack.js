let SlackAPI = Meteor.npmRequire( 'node-slack' ),
    Slack    = new SlackAPI( Meteor.settings.private.slack.hookUrl );

//Slack.send({
//    text: "New message",
//    username: "WeCode",
//    icon_emoji: ":space_invader:",
//    attachments: [
//        {
//            fallback: "New message from WeCode",
//            color: 'good',
//            fields: [
//                { title: "title", value: "TTN Meeting #1" },
//                { title: "wrote-by", value: "zarazi" },
//            ]
//        }
//    ]
//});

let _bot = {
    username: "WeCode",
    icon_emoji: ":space_invader:",
}

let _texts = {
    "post" : {
        text: 'New post by'
    },
    "ment" : {
        text: 'New comment from'
    }
}

let _wrapAttachment = (fields) => {
    return {
        attachments: [
            {
                fallback: 'message from wecode',
                color: 'good',
                fields: fields
            }
        ]
    }
}

let _sendToSlack = (type, userName, url, fields) => {
    let prefix = _texts[type].text,
        text = {text:`${prefix} ${userName}\n<${url}>`},
        payload = _.extend({},_bot, text, _wrapAttachment(fields));
    //console.log(payload);
    Slack.send(payload);
}

Modules.slack = {};
Modules.slack.sendToSlack = _sendToSlack;

//_sendToSlack('post','zarazi','http://wecode.meteor.com/post/ncmxzncxfkd',[{title:'title',value:'New Post'}]);
