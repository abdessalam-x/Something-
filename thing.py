import math
from turtle import*

def heartA(F):
    return 15*math.sin(F)**3
def heartB(F):
    return 12*math.cos(F)-5*\
    math.cos(2*F)-2*\
    math.cos(3*F)-\
    math.cos(4*F)
speed(0)
bgcolor("black")
for i in range(6000):
    goto(heartA(i)*20, heartB(i)*20)
    for j in range(5):
        color("red")
    goto(0,0)
done()