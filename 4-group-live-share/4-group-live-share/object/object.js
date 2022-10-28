/**
 * 
 * 17-2 Create a student object that has the first name value of Mark, last name value as Jacob, age as 31, and the id as A001234.
 * Then initialise the variable sentence to say the following: 
 * The new employee __first name__   __last name__ is __age__ years old. The employee ID is __empyloyee ID__.
 * Then console log the sentence.
 *
 */

const person = {
    firstName: "Mark",
    lastName: "Jacob",
    age: 31,
    id: A001234,
    sentence: function() {
        return this.firstName + " " + this.lastName + " is " + this.age + " years old." + "The employee ID is " + this.id + "."
    }
};

console.log(person);
console.log(sentence);