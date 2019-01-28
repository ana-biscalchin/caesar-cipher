function cipherEncode() {

    const offset = document.getElementById("key_ciphering").value;
    const offsetInt = parseInt(offset);

    console.log("esse é o offset " + offsetInt)

    let msg = document.getElementById("message").value;
    let arrayMsg = msg.split("");

    for (var i = 0; i < msg.length; i++) {

        (arrayMsg[i] = msg.charCodeAt(i))

        console.log(arrayMsg)



    }

}



/*
-- -- -- --



for (arrayMsg2 of arrayMsg1.map(replacement)

    let arrayMsg2 =

        console.log(arrayMsg2)


    let encriptedMessage = arrayMsg.map(arrayMsg + offset)

    console.log(encriptedMessage)


    let replacement = arrayMsg.map((arrayMsg(i) + offset) % 26)

    ===
    ===

    let replacement = function() {
        for (var i = 0; i < arrayMsg.Msg.length; i++);
        (arrayMsg + parseInt(offset)) % 26;
    }
    return replacement


    ===
    === === === ==



    for (i = 0; i < arrayMsg.length; i++) {

        (arrayMsg + offsetInt) % 26;


        console.log(arrayMsg)


    }