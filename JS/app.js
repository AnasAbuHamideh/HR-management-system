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
        this.Salary=this.Salary-(this.Salary*0.075);
    console.log(this.Salary);
}
else if (this.Level == "Mid-Senior"){
        this.Salary = Math.floor(Math.random() * (1500-1000) + 1000);
        this.Salary=this.Salary-(this.Salary*0.075);
    console.log(this.Salary);
}
else if (this.Level == "Junior"){
    this.Salary = Math.floor(Math.random() * (1000-500) + 500);
    this.Salary=this.Salary-(this.Salary*0.075);
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

let EForm = document.getElementById('form1');


let addnewemployee=function(event){
    event.preventDefault();
    let name= event.target.name.value;
    let imgUrl = event.target.img.value;
    let department = event.target.depart.value;
    let level = event.target.Level.value;
    let employeeId = Math.floor((Math.random() * (1025 - 1007)) + 1007)
    console.log(name, imgUrl, department, level, employeeId);
    const newEmployee = new Employee(employeeId, name, department, level, imgUrl)
    newEmployee.calcSalary();
    newEmployee.render2();
}
EForm.addEventListener('submit',addnewemployee)

Employee.prototype.render2=function(){
    let divEl=document.getElementById('div');
    let imgEl=document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src', this.imageURL);
    imgEl.setAttribute('alt', "image");
    let pEl=document.createElement('p');
    divEl.appendChild(pEl);
    // pEl.setAttribute('Name:',this.name);
    // pEl.setAttribute('ID:',this.Employee_ID);
    // pEl.setAttribute('Department:',this.Department);
    // pEl.setAttribute('Level:',this.Level);
    // pEl.setAttribute('Salary:',this.Salary);
    pEl.textContent=`Name:${this.Full_Name}-ID:${this.Employee_ID}-Department:${this.Department}-Level:${this.Level}-Salary:${this.Salary}`;
    let brEl=document.createElement('br');
    divEl.appendChild(brEl);
}