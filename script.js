const student = {
    iD: "21521060",
    studentName: "Lâm", 
    faculty:"Computer engineering",

};

document.getElementById("demo").innerHTML = 
student.studentName + " có ID: " + student["iD"] + " và là 1 " + student.faculty;