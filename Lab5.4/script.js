var person = {
    firstname: "Chí Nguyên",
    lastname: "Lê Nguyễn",
  
    setLastName: function(_lastname) {
      // Set giá trị
      this.lastname = _lastname;
    },
  
    setFirstName: function(_firstname) {
      // Set giá trị
      this.firstname = _firstname;
    },
  
    // Thêm phương thức getFullName
    getFullName: function() {
      return this.lastname + " " + this.firstname;
    },
  };
person.setLastName('Nguyễn Thị');
person.setFirstName('Hồng Gấm');
console.log(person.getFullName());