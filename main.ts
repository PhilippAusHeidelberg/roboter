basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        motors.dualMotorPower(Motor.A, 50)
    } else {
        motors.dualMotorPower(Motor.A, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        motors.dualMotorPower(Motor.B, 50)
    } else {
        motors.dualMotorPower(Motor.B, 0)
    }
})
basic.forever(function () {
    if (callibot.entfernung(KEinheit.cm) < 5) {
        motors.dualMotorPower(Motor.AB, -50)
        basic.pause(100)
    } else {
        motors.dualMotorPower(Motor.AB, 0)
    }
})
