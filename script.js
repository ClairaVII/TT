const student = {
    studentName: "Lâm", 
    iD: "2152",
    job:"Super idol",
    studentInfor: function () {
        return "ID: " + this.iD + " là " + this.studentName + " hiện đang làm " + this.job + " như công việc bán thời gian";
    }
};

document.getElementById("demo").innerHTML = 
student.studentInfor();