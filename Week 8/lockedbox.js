const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("locked");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    let locked = box.locked;
    if (!locked) {
      return body();
    }
  
    box.unlock();
    try {
      return body();
    } finally {
      box.lock();
    }
  }
  
  withBoxUnlocked(function() {
    box.content.push("Two Gold dubloons");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Plastic!");
    });
  } catch (e) {
    console.log("Error:", e);
  }
  
  console.log(box.locked);
  // → true