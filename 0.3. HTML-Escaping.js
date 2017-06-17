function htmlEscape(text) {
    let map = {
        '"': '&quot;', '&': '&amp;',
        "'": '&#39;', '<': '&lt;', '>': '&gt;'
    };
    return text.replace(/[\"&'<>]/g, ch => map[ch]);
}