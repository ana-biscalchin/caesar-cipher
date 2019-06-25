document.getElementById("decision_encode").addEventListener("click", showCiphering);
document.getElementById("decision_decode").addEventListener("click", showDeciphering);
document.getElementById("encode_button").addEventListener("click", collectEncode);
document.getElementById("decode_button").addEventListener("click", collectDecode);

changeState = (state) => {
      let display = document.getElementById(state).style.visibility;
      if (display === "hidden" ) {
          display = "visible";
      }
      else {
          display = "hidden";
      }
};

 showCiphering = () => {
    changeState("ciphering", "deciphering")
};

showDeciphering = () => {
    changeState("deciphering", "ciphering")
};

collectEncode = () => {
    let message = document.getElementById("message").value;
    let offset = parseInt(document.getElementById("key_ciphering").value);
    let encodeResult = cipherEncode(message, offset);
    document.getElementById("cipher_message").innerHTML =  encodeResult;
    changeState("result_cipher", "ciphering")
};

cipherEncode = (message, offset) => {
    result = "";
    for (let i in message) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
            code = (message.charCodeAt(i) - 65 + (offset % 26) + 26) % 26 + 65;
        }
        else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
            code = (message.charCodeAt(i) - 97 + (offset % 26) + 26) % 26 + 97;
        }
        else if (message.charCodeAt(i) === 32) {
            code = 32;
        }
        else if (!(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 && message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122 )) {
          code = message.charCodeAt(i);
        }
        result += String.fromCharCode(code);
  }
  return result;
};

collectDecode = () => {
    let message = document.getElementById("second_message").value;
    let offset = parseInt(document.getElementById("key_deciphering").value);
    let decodeResult = cipherDecode(message, offset);

    document.getElementById("decipher_message").innerHTML = decodeResult;
      changeState("result_deciphering", "deciphering")
};

cipherDecode = (message, offset) => {
    result = "";
    for (let i in message) {
         if (message.charCodeAt([i]) >= 65 && message.charCodeAt(i) <= 90) {
             code = (message.charCodeAt([i]) - 65 - (offset % 26) + 26) % 26 + 65;
         } else if (message.charCodeAt([i]) >= 97 && message.charCodeAt(i) <= 122) {
             code = (message.charCodeAt([i]) - 97 - (offset % 26) + 26) % 26 + 97;
         } else if (message.charCodeAt([i]) === 32) {
             code = 32;
         }
        else if (!(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90 && message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122 )) {
          code = message.charCodeAt(i);
        }
    result += String.fromCharCode(code);
};
    return result;
};