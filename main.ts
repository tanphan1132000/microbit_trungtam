radio.onReceivedString(function (receivedString) {
    serial.writeString(receivedString)
})
serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (cmd == "0") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (cmd == "1") {
        basic.clearScreen()
    }
})
let cmd = ""
radio.setGroup(1)
