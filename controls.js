class Controls {
  constructor() {
    this.forward = false;
    this.backward = false;
    this.right = false;
    this.left = false;

    this.#addKeyListeners();
  }

  #addKeyListeners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.backward = true;
          break;
      }
    };

    document.onkeyup = (event) => {
        switch (event.key) {
          case "ArrowLeft":
            this.left = false;
            break;
          case "ArrowRight":
            this.right = false;
            break;
          case "ArrowUp":
            this.forward = false;
            break;
          case "ArrowDown":
            this.backward = false;
            break;
        }
      };
  }
}
