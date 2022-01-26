function Employee(Employee_ID, Full_Name, Department, Level,imgUrl) {
    this.Employee_ID = Employee_ID;
    this.Full_Name = Full_Name;
    this.Department = Department;
    this.Level = Level;
    this.imageURL = imgUrl;
}
Employee.prototype.calcSalary = function () {
    if (this.Level == "Senior"){
        this.Salary = Math.floor(Math.random() * (2000-1500) + 1500);
    console.log(this.Salary);
}
else if (this.Level == "Mid-Senior"){
        this.Salary = Math.floor(Math.random() * (1500-1000) + 1000);
    console.log(this.Salary);
}
else if (this.Level == "Junior"){
    this.Salary = Math.floor(Math.random() * (1000-500) + 500);
console.log(this.Salary);
}

}

Employee.prototype.render=function(){
    document.write(`<pre><br>Name: ${this.Full_Name}  Salary: ${this.Salary}</pre>`);
}

const e1=new Employee(1000,"Ghazi Sameer","Administration" ,"Senior");
e1.calcSalary();
e1.render();

const e2=new Employee(1001,	"Lana Ali","Finance","Senior");
e2.calcSalary();
e2.render();

const e3=new Employee(1002,	"Tamara Ayoub" ,"Marketing","Senior");
e3.calcSalary();
e3.render();

const e4=new Employee(1003	,"Safi Walid" ,"Administration","Mid-Senior");
e4.calcSalary();
e4.render();

const e5=new Employee(1004,	"Omar Zaid", "Development","Senior");
e5.calcSalary();
e5.render();

const e6=new Employee(1005,"Rana Saleh","Development","Junior");
e6.calcSalary();
e6.render();

const e7=new Employee(1006,	"Hadi Ahmad","Finance","Mid-Senior");
e7.calcSalary();
e7.render();

