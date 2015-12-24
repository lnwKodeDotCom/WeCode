Template.afMarkdownExt.replaces("afMarkdown");
Template.afMarkdown.helpers({
    markdownTextEmoji() {
        return marked(Emoji.convert(Template.instance().markdownInput.get()));
    }
});
