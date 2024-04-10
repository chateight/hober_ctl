input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (off == 0) {
        if (rot_flag == 0) {
            rot_flag = 1
            radio.sendNumber(2)
            basic.showArrow(ArrowNames.NorthWest)
        } else {
            rot_flag = 0
            radio.sendNumber(3)
            basic.showArrow(ArrowNames.NorthEast)
        }
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    if (off == 0) {
        if (mov_flg == 0) {
            mov_flg = 1
            radio.sendNumber(4)
            basic.showArrow(ArrowNames.West)
        } else {
            mov_flg = 0
            radio.sendNumber(5)
            basic.showArrow(ArrowNames.East)
        }
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    off = 1
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.South)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    off = 0
    radio.sendNumber(0)
    basic.showArrow(ArrowNames.North)
})
let off = 0
let rot_flag = 0
let mov_flg = 0
radio.setGroup(1)
mov_flg = 0
rot_flag = 0
off = 1
