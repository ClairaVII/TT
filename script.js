const student = {
    iD: "21521060",
    studentName: "Lâm", 
    faculty:"computer engineering",
    
};

document.getElementById("demo").innerHTML = 
student["iD"] + "_" + student.studentName + "_" + student.faculty;