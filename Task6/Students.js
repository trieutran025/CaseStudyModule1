class Students {
    constructor(id, name, garde, email, birthday, module) {
        this.id= id;
        this.name = name;
        this.grade =garde;
        this.email = email;
        this.birthday = birthday;
        this.module = module;
    }

    setId (newId)
    {
        this.id = newId;
    };
    setName (newName)
    {
        this.name = newName;
    };
    setGrade (newGrade)
    {
        this.grade = newGrade;
    };
    setEmail (newEmail)
    {
        this.email = newEmail;
    };
    setBirthday (newBirthday)
    {
        this.birthday = newBirthday;
    };
    setModule (newModule)
    {
        this.module = newModule;
    };
}
let students=[];
function updateStudents() {
       let tableStudents=
           '<table>'+
           '<tr>'+
                    '<th>Mã Học viên</th>'+
                    '<th>Tên Học viên</th>'+
                    '<th>Lớp</th>'+
                    '<th>Email</th>'+
                    '<th>Ngày Sinh</th>'+
                    '<th>Moudle</th>'+
           '</tr>';
    for (let i = 0; i <students.length ; i++) {
        tableStudents+=
            '<tr>'+
                    '<td>'+students[i].id+'</td>'+
                    '<td>'+students[i].name+'</td>'+
                    '<td>'+students[i].grade+'</td>'+
                    '<td>'+students[i].email+'</td>'+
                     '<td>'+students[i].birthday+'</td>'+
                    '<td>'+students[i].module +'</td>'+
            '</tr>'
    }
    tableStudents+="</table>";
    document.getElementById('result').innerHTML=tableStudents;
}
    function formatId(num) {
        if(num<10) return "HV-000"+num;
        else if(num<100) return "HV-00"+num;
        else if(num<1000) return "HV-0"+num;
        else if(num>1000) return "HV-"+num;
    }
    function checkId(str) {
        if(students.length>0){
            for (let i = 0; i <students.length ; i++) {
                    if(str===students[i].id){
                        alert("Học viên đã có trong danh sách!");
                        return true;
                    }
            }
        }
    }
        function formatBirthday(date) {
            return date.slice(0,2)+"/"+date.slice(2,4)+"/"+date.slice(4,8);
        }
function checkName(str) {
        if(str.length>50){
            alert("Họ và tên đã quá 50 kí tự");
            return true;
        }
}
function checkModule(num) {
    if(num<1||num>6){
        alert("Module chỉ tính từ 1 đến 6");
        return true;
    }
}
function createStudent()
{
    let student = new Students();

    let inputId;
    do
    {
        inputId = prompt ("Nhập  Mã học viên");
        student.setId(formatId(inputId));
    }
    while (checkId(student.id));

    let inputName;
    do
    {
        inputName = prompt ("Nhập Họ và tên học viên");
    }
    while (checkName(inputName));
    student.setName(inputName);

    let inputGrade = prompt ("Nhập lớp học viên");
    student.setGrade(inputGrade);

    let inputEmail = prompt ("Nhập  Email học viên");
    student.setEmail(inputEmail);

    let inputBirthday = prompt ("Nhập  ngày tháng năm sinh (dd//mm//yyyy) ");
    student.setBirthday(formatBirthday(inputBirthday));

    let inputModule;
    do
    {
        inputModule = prompt ("Nhập  Module");
    }
    while (checkModule(inputModule));
    student.setModule(inputModule);

    students.push(student);
    updateStudents();
    return students;
}
function EditingStudent()
{
    let wanted = +prompt ("Nhập mã học viên cần sửa thông tin");
    for (let i = 0; i < students.length; i++)
    {
        if (formatId(wanted) === students[i].id)
        {
            let wantedName;
            do
            {
                wantedName = prompt ("Nhập lại họ và tên học viên");
            } while (checkName(wantedName));
            students[i].setName(wantedName);
            if(confirm("Bạn có muốn Nhập lại lớp Không")) {
                let wantedGrade = prompt("Nhập lại lớp học viên");
                students[i].setGrade(wantedGrade);
            }
            if(confirm("Bạn có muốn nhập lại Email")) {
                let wantedEmail = prompt("Nhập lại Email học viên");
                students[i].setEmail(wantedEmail);
            }
            if(confirm("Bạn có muốn nhập lại ngày tháng Năm Sinh")) {
                let wantedBirthday = prompt("Nhập lại ngày tháng năm sinh  (dd/mm/yyyy)");
                students[i].setBirthday(formatBirthday(wantedBirthday));
            }
            if(confirm("Bạn có muốn nhập lại Module")) {
                let wantedModule;
                do {
                    wantedModule = prompt("Nhập lại module của học viên");
                }
                while (checkModule(wantedModule));
                students[i].setModule(wantedModule);
            }
            updateStudents();
            return students;
        }
    }
    alert ("Không tìm thấy học viên có mã số này!");
}
function deleteStudent()
{
    let wanted = +prompt ("Nhập mã học viên cần xóa thông tin");
    for (let i = 0; i < students.length; i++)
    {
        if (formatId(wanted) === students[i].id)
        {
            if(confirm("Bạn có  thực sự muốn xóa không?")){
            students.splice(i, 1);
            updateStudents();
            return students;
            }
            else{
                alert("Học Viên đã không bị xóa!")
                break;
            }
        }
        else{
            alert ("Không tìm thấy học viên có mã số này!")
        }
    }

}