class CreateUser {
    constructor(firstName, lastName, email, age, address) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.age = age;
      this.address = address;
    }
    about() {
      return `${this.firstName} is ${this.age} years old.`;
    }
    is18() {
      return this.age >= 18;
    }
    sing() {
      return "sing sing sing ";
    }
  }
  
  
  const user1 = new CreateUser('Muhammad', 'Ahmad', 'mian.muhammad.ahmad.53@gmail.com', 24, "House # address address address address");
  
  
