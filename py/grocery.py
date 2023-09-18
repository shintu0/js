groceryList={}

while True:
    try:
        item=input().strip().upper()
        if item in list(groceryList.keys()):
            groceryList[item]+=1
        else:
            groceryList[item]=1
    except EOFError:
        groceries=list(groceryList.keys())
        groceries=sorted(list(groceryList.keys()))
        print()
        for item in groceries:
            print(f"{groceryList[item]} {item}")
        break
    
    
