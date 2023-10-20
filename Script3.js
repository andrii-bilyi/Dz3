function applyStyles() {
    const inputText = document.getElementById('inputText').value;
    const bold = document.getElementById('bold').checked ? 'font-weight: bold;' : '';
    const underline = document.getElementById('underline').checked ? 'text-decoration: underline;' : '';
    const italics = document.getElementById('italics').checked ? 'font-style: italic;' : '';
    
    const textAlignOptions = document.getElementsByName('textAlign');
    let selectedTextAlign = 'left';

    for (const option of textAlignOptions) {
        if (option.checked) {
            selectedTextAlign = option.value;
            break;
        }
    }
    const styledText = `<p style="${bold} ${underline} ${italics} text-align: ${selectedTextAlign};">${inputText}</p>`;
    document.getElementById('outputText').innerHTML = styledText;
}