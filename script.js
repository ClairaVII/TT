class student{
    constructor(iD, studentName, faculty){
        this.iD = iD;
        this.studentName = studentName; 
        this.faculty = faculty;
    }
    static Welcome(x){
        return "Welcome_to_UIT! ";
    }
};

let student1 = new student;
let student2 = new student;
document.getElementById("demo").innerHTML = student1.Welcome + "<br/>" +
                                            student2.Welcome + "<br/>" +
                                            student.Welcome(student1) ;