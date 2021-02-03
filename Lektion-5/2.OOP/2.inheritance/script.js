/* 
    4 pelare inom Objektorienterad programmering  (OOP)
      * Encapsulation
      * Inherirance
      * Polymorphism
      * Abstraction
     
    JS
      * Encapsulation
      * Inherirance
      * Polymorphism
     
    -------------------------------------------------------

    <= ES5
       * Inheritance
    
    >= ES6
       * Encapsulation
       * Polymorphism
*/

//INHERITANCE
//Arv mellan klasser

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, teacherId, skills) {
    super(firstName, lastName);
    this.teacherId = teacherId;
    this.skills = skills;
  }

  displaySkills() {
    this.skills.forEach(skill => {
      console.log(skill)
    })
  }
}

class Student extends Person {
  constructor(firstName, lastName, studentid) {
    super(firstName, lastName);
    this.studentid = studentid;

  }
}


const t1 = new Teacher('Joakim', 'Wahlström', 1, ['Javascript', 'React', 'Vue', 'UX-Design']);

console.log(t1.fullName());
t1.displaySkills();

const s1 = new Student('Johan', 'Andersson', 1);
// s1.displaySkills();                     // ärver inte displayskills då den ligger i Teacher klassen.
console.log(s1.fullName());