const student = {
    iD: "21521060",
    studentName: "Lâm", 
    faculty:"Computer engineering",
    studentInfor: function () {
        return this.iD + "_" + this.studentName + "_" + this.faculty;
    }
};

document.getElementById("demo").innerHTML = 
student.studentInfor();