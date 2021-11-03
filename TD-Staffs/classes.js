class CloudPC {

  constructor() {
    this.active = false;
    this.os = "Windows";
    this.storage = "512G";
  }

  deactivate() {
    this.active = false;
  }

  activate() {
    this.active = true;
  }
}

let shadow1 = new CloudPC();

alert("Shadow1's status is currently " + shadow1.active)

shadow1.activate();

alert("Shadow1's status is now " + shadow1.active)
