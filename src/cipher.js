function cipherEncode() {

    const offset = parseInt(document.getElementById("key_ciphering").value);
    let msg = document.getElementById("message").value;

    console.log("esse é o offset " + offset + "e a mensagem a ser criptografada: " + msg)

    for (let i = 0; i < msg.length; i++) {
        let msg1 = msg.charCodeAt([i]);

        console.log("essa é o cod ascii: " + msg1);

        let replacement = ((msg1 - 65 + offset) % 26) + 65;

        console.log(replacement)
    }
}