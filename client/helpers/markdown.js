Template.registerHelper('renderMarkdownEmoji', function renderMarkdown(value) {
    if(value)
        return marked(Emoji.convert(value));
});