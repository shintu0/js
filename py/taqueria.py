items={
    "Baja Taco": 4.00,
    "Burrito": 7.50,
    "Bowl": 8.50,
    "Nachos": 11.00,
    "Quesadilla": 8.50,
    "Super Burrito": 8.50,
    "Super Quesadilla": 9.50,
    "Taco": 3.00,
    "Tortilla Salad": 8.00
}

total=0
while True:
    try:
        item=input("Item: ")
        keys=list(items.keys())
        itemsFormated={x.lower():items[x] for x in keys}
        if item.lower() in list(itemsFormated.keys()):
            total+=itemsFormated[item]
            print(f"Total: {total}")
            continue
        else:
            continue
    except (EOFError,KeyboardInterrupt):
        break
