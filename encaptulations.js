class Employee{

setEmployeeDetails(name, id, phoneNumber){
  
    this.name = name;
    this.id = id;
    this.phoneNumber = phoneNumber;
}
getEmplName() {

    return this.name;
}
getEmplid(){

    return this.id;

}
getemplPhoneNumber(){

    return this.phoneNumber;
}
}
let employe1 = new Employee;

employe1.setEmployeeDetails('dharmendra', 34444,3453343433)

console.log("employee name is " + employe1.name);
console.log("Employee id is" + employe1.id);
console.log("employee phone number is " + employe1.phoneNumber);