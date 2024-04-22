input.onButtonPressed(Button.A, function () {
    basic.showString("" + (T))
    music.play(music.tonePlayable(622, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Yes)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    datalogger.deleteLog()
})
let T = 0
basic.showIcon(IconNames.Heart)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
datalogger.setColumnTitles(
"oven",
"temp"
)
basic.forever(function () {
    T = DS18B20.TemperatureNumber(DS18B20.pin.pin0)
    datalogger.log(
    datalogger.createCV("oven", T),
    datalogger.createCV("temp", input.temperature())
    )
    basic.showString("" + (T))
    basic.pause(30000)
})
