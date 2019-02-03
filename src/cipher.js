document.getElementById("encode_button").addEventListener("click", collectEncode);


function collectEncode() {

    let msg = document.getElementById("message").value;
    let offset = parseInt(document.getElementById("key_ciphering").value);
    let encodeResult = cipherEncode(msg, offset);

    console.log({ msg, offset, encodeResult});

    document.getElementById("cipher_message").innerHTML = encodeResult;
}

function cipherEncode(msg, offset) {
    result = "";
    for (let i = 0; i < msg.length; i++) {
        if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
            code = (msg.charCodeAt(i) - 65 + (offset % 26) + 26) % 26 + 97;
        }
        else if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
            code = (msg.charCodeAt(i) - 97 + (offset % 26) + 26) % 26 + 97;
        }
        else if (msg.charCodeAt(i) === 32) {
            code = 32;
        }
        else if (!(msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90 || msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122 )) {
          code = msg.charCodeAt(i);
        }

        console.log(code);
        result += String.fromCharCode(code);
  }
  console.log(result);

  return result;
}

document.getElementById("decode_button").addEventListener("click", collectDecode);

function collectDecode() {

    let msg = document.getElementById("second_message").value;
    let offset = parseInt(document.getElementById("key_deciphering").value);
    let decodeResult = cipherDecode(msg, offset);

    console.log({ msg, offset, decodeResult});

    document.getElementById("decipher_message").innerHTML = decodeResult;
}

function cipherDecode(msg, offset) {
    result = "";
    for (let i = 0; i < msg.length; i++) {
         if (msg.charCodeAt([i]) >= 65 && msg.charCodeAt(i) <= 90) {
             code = (msg.charCodeAt([i]) - 65 - (offset % 26) + 26) % 26 + 65;
         } else if (msg.charCodeAt([i]) >= 97 && msg.charCodeAt(i) <= 122) {
             code = (msg.charCodeAt([i]) - 97 - (offset % 26) + 26) % 26 + 97;
         } else if (msg.charCodeAt([i]) === 32) {
             code = 32;
         }
        else if (!(msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90 || msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122 )) {
          code = msg.charCodeAt(i);
        }
    console.log(code);
    result += String.fromCharCode(code);
  }
    console.log(result);

    return result;
}
