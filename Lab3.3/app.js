let Entity = function(name, delay) {
    this.name = name;
    this.delay = delay;
  };
  
  Entity.prototype.greet = function() {
    setTimeout(() => {
      console.log('Xin chào, tên tôi là', this.name);
    }, this.delay);
  };
  
  let java = new Entity('Java', 5000);
  let cpp = new Entity('C++', 30);
  
  java.greet();
  cpp.greet();