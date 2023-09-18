import sys

months=[
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
]
op=""
while True:
    try:
        flag=True
        m,y,d=0,0,0
        date_in=input("Date: ").lower()
        for i in range(12):
            if months[i] in date_in:
                md,y=date_in.split(",")
                m,d=md.split(" ")
                m,d=i,int(d)
                flag=False
                break
        if flag:
            m,d,y=date_in.split("/")
            d=int(d)
            m=int(m)

        if d>31 or d<1 or m>12 or m<1:
            continue
        else:
            d,m=f'{d:02}',f'{m:02}'
            op+=(y.strip()+"-"+m+"-"+d)
            print(op)
            break
    except:
        continue
        #print("Unexpected error:", sys.exc_info()[0])











