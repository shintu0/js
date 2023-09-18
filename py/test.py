while True:
    try:
        item=input("\nItem: ")
    except EOFError:
        continue
    else:
        print("ok")
        break

