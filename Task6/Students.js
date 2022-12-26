class Students{
    constructor(maHv,name,lop,email,birth,module) {
        this.maHv=maHv;
        this.name=name;
        this.lop=lop;
        this.email=email;
        this.birth=birth;
        this.module=module;
    }
    showStudents(){
        return "Mã học viên "+this.maHv+" Tên "+this.name+" Lớp "+this.lop+" Email "+this.email+" Ngày sinh "+this.birth+" Module "+this.module;
    }
    addStudents(maHv,name,lop,email,birth,module){
        this.maHv.add();
        this.name.add();
        this.lop.add();
        this.email.add();
        this.birth.add();
        this.module.add();
    }
}
    let n=+prompt("Nhập số lượng học viên");
    let maHv=[];
    let name=[];
    let lop=[];
    let email=[];
    let birth=[];
    let module=[];
    let students= new Students(n);
    for (let i = 0; i <n ; i++) {
        maHv[i]=prompt("Nhập Mã của học viên:");
        name[i]=prompt("Nhập Tên Học Viên:");
        lop[i]=prompt("Nhập lớp");
        email[i]=prompt("Nhập email của học viên:");
        birth[i]=prompt("Nhập ngày sinh học viên:");
        module[i]=+prompt("Nhập module:");
    }
for (let i = 0; i <n ; i++) {
    students[i]= new Students(maHv[i],name[i],lop[i],email[i],birth[i],module[i]);
}
for (let i = 0; i <n ; i++) {
    document.writeln(students[i].showStudents());
    document.write("<br>")
}
