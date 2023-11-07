class student{
    constructor(iD, studentName, faculty){
        this.iD = iD;
        this.studentName = studentName; 
        this.faculty = faculty;
    }
    static Welcome(x){
        return "Welcome_" + x.studentName + "_to_UIT! ";
    }
};

let student1 = new student("21521060", "Lâm","Computer engineering");

document.getElementById("demo").innerHTML = 
student1["iD"] + "_" + student1.studentName + "_" + student1.faculty + "<br/>" + student.Welcome(student1);