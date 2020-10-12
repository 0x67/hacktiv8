import math

detik = 50
minutes = math.floor(detik / 60)
seconds = detik - minutes * 60

if seconds < 10:
   print(f"{minutes}:0{seconds}")
else:
    print(f"{minutes}:{seconds}")