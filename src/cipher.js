function cipherEncode() {

    var msg = document.getElementById("message").value;
    var offset = parseInt(document.getElementById("key_ciphering").value);
    var result = "";

    console.log("esse é o offset " + offset + "e a mensagem a ser criptografada: " + msg)

    for (let i = 0; i < msg.length; i++) {
        if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
            code = (((msg.charCodeAt(i) - 65) + offset) % 26) + 65;
        } else if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
            code = (((msg.charCodeAt(i) - 97) + offset) % 26) + 97;
        } else if (msg.charCodeAt(i) === 32) {
            code = 32;
        }

        console.log(code)

        result += String.fromCharCode(code);

    }
    console.log(result)
    return document.getElementById("encripted_message").innerHTML = result

}

function cipherDecode() {

    var msg = document.getElementById("cipher_message").value;
    var offset = parseInt(document.getElementById("key_deciphering").value);
    let result = "";

    console.log("esse é o offset " + offset + "e a mensagem a ser descriptografada: " + msg)

    for (let i = 0; i < msg.length; i++) {
        if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
            code = (((msg.charCodeAt(i) - 65) - offset) % 26) + 65;
        } else if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
            code = (((msg.charCodeAt(i) - 97) - offset) % 26) + 97;
        } else if (msg.charCodeAt(i) === 32) {
            code = 32;
        }

        console.log(code)

        result += String.fromCharCode(code);

    }
    console.log(result)
    return document.getElementById("decipher_message").innerHTML = result

}