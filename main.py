Schritte = 0

def on_gesture_three_g():
    global Schritte
    Schritte += 1
input.on_gesture(Gesture.THREE_G, on_gesture_three_g)
