class Student:

    def __init__(self,name,house):
        self.name=name
        print("Constructor")
        self._house=house

    @property
    def house(self):
        return self._house

    @classmethod
    def get(clss):
        name=input("Name:")
        house=input("House:")
        return clss(name,house)

    @house.setter
    def house(self,house):
        print("Setter")
        if house not in ["A", "B", "C"]:
            raise ValueError("Invalid house")
        else:
            self._house=house


def main():
    student=Student("Adam","A")
    #print(f"{student.name} from",student.house)

    #print("Now it can be error")
    student1=Student("Adam","E")
    print(f"{student1.name} from",student1.house)
    student1._house="123"
    print(f"{student1.name} from",student1.house)
    newStudent=Student.get()
    print(f"{newStudent.name} from",newStudent.house)
    

main()

    
