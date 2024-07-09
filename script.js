document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');
    const outputPlaceholder = document.querySelector('.output-placeholder');

    const encrypt = (text) => {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    };

    const decrypt = (text) => {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    };

    const displayOutput = (text) => {
        if (text) {
            outputText.value = text;
            outputText.style.display = 'block';
            outputPlaceholder.style.display = 'none';
            copyBtn.style.display = 'block';
        } else {
            outputText.style.display = 'none';
            outputPlaceholder.style.display = 'flex';
            copyBtn.style.display = 'none';
        }
    };

    encryptBtn.addEventListener('click', () => {
        const text = inputText.value;
        const encryptedText = encrypt(text);
        displayOutput(encryptedText);
    });

    decryptBtn.addEventListener('click', () => {
        const text = inputText.value;
        const decryptedText = decrypt(text);
        displayOutput(decryptedText);
    });

    copyBtn.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência! ');
    });
});
