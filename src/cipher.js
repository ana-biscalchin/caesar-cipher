function cipherEncode() {
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