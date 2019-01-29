document.getElementById("encode_button").addEventListener("click", collectEncode);


function collectEncode() {

    const originalMsg = document.getElementById("message").value;
    const offset = parseInt(document.getElementById("key_ciphering").value);
    const result = cipherEncode(originalMsg, offset);

    console.log({ originalMsg, offset, result });
    document.getElementById("encripted_message").innerHTML = result;
}

function cipherEncode(msg, offset) {
    result = "";
    for (let i = 0; i < msg.length; i++) {
        if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
            code = (msg.charCodeAt(i) - 65 + offset) % 26 + 65;
        } else if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
            code = (msg.charCodeAt(i) - 97 + offset) % 26 + 97;
        } else if (msg.charCodeAt(i) === 32) {
            code = 32;
        }
        console.log(code);
        result += String.fromCharCode(code);
    }
    console.log(result);
    return result;
}