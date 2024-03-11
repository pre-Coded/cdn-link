class CustomModal {
    constructor(themeColor, username, password) {
      this.themeColor = themeColor;
      this.username = username;
      this.password = password;
      this.modal = document.createElement("div");
      this.modal.className = "modal";
      this.createModal();
      this.createModalContent();
      // this.setupEventListeners();
      document.body.appendChild(this.modal);
    }
  
    createModal() {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
  
      this.modal.style.height = "60vh";
      if (screenWidth < 600) {
        this.modal.style.width = "90vw";
      } else {
        this.modal.style.width = "60vw";
      }
  
      this.modal.style.backgroundColor = "white";
      this.modal.style.border = "1px solid #f2f2f2";
      this.modal.style.borderRadius = "10px";
      this.modal.style.position = "fixed";
      this.modal.style.zIndex = "100000";
      this.modal.style.top = "50%";
      this.modal.style.left = "50%";
      this.modal.style.transform = "translate(-50%, -50%)";
    }
  
    createModalContent() {
      const modalContent = document.createElement("div");
      this.modal.appendChild(modalContent);
  
      const closeBtn = document.createElement("span");
      closeBtn.style.position = "absolute";
      closeBtn.style.top = "10px";
      closeBtn.style.right = "10px";
      closeBtn.style.height = "2rem";
      closeBtn.style.fontSize = "2rem";
      closeBtn.style.aspectRatio = "1";
      closeBtn.innerHTML = "&times;";
      modalContent.appendChild(closeBtn);
  
      const form = document.createElement("form");
      form.id = "inputForm32";
      form.style.display = "flex";
      form.style.flexDirection = "column";
      form.style.alignItems = "center";
      form.style.justifyContent = "center";
      form.style.marginTop = "4rem";
      modalContent.appendChild(form);
  
      const inputField1 = this.createInputField('inputfield2230')
      const inputField2 = this.createInputField('inputfield3423');
  
  
      form.appendChild(inputField1);
      form.appendChild(inputField2);
  
      const submitBtn = document.createElement("button");
      submitBtn.type = "submit";
      submitBtn.textContent = "Submit";
      submitBtn.style.height = "2rem";
      submitBtn.style.width = "12rem";
      submitBtn.style.background = "blue";
      submitBtn.style.color = "white";
      submitBtn.style.borderRadius = "5px";
      submitBtn.style.marginTop = "5px";
  
      form.appendChild(submitBtn);
    }
  
    createInputField(id){
      const inputField1 = document.createElement("input");
      inputField1.type = "text";
      inputField1.id = id;
      inputField1.name = "userInput";
      inputField1.required = true;
      inputField1.style.height = "3rem";
      inputField1.style.width = "16rem";
      inputField1.style.fontSize = "0.9em";
      inputField1.style.padding = "0 5px";
      inputField1.placeholder = "Enter your title";
      inputField1.setAttribute("placeholderstyle", "font-size: 0.9em;");
      inputField1.style.outline = "none";
      inputField1.style.marginTop = "5px";
      
      const placeholderStyle1 = inputField1.getAttribute("placeholderstyle");
      if (placeholderStyle1) {
        const styleElement = document.createElement("style");
        styleElement.textContent = `#${inputField1.id}::placeholder { ${placeholderStyle1} }`;
        document.head.appendChild(styleElement);
      }
  
      return inputField1;
    }
  
    setupEventListeners() {
      const openBtn = document.createElement("button");
      openBtn.textContent = "Open Modal";
      openBtn.id = "openModalBtn";
      openBtn.addEventListener(
        "click",
        () => (this.modal.style.display = "block")
      );
  
      const closeBtn = this.modal.querySelector(".close");
      closeBtn.addEventListener(
        "click",
        () => (this.modal.style.display = "none")
      );
  
      const form = this.modal.querySelector("#inputForm");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const userInput = document.getElementById("inputField").value;
        this.handleFormSubmission(userInput);
      });
  
      document.body.appendChild(openBtn);
    }
  
    handleFormSubmission(userInput) {
      // You can handle the user input here (e.g., send it to your server, perform an action, etc.)
      if (this.authenticate()) {
        alert("User Input: " + userInput);
        this.modal.style.display = "none";
      } else {
        alert("Authentication failed. Please check your credentials.");
      }
    }
  
    authenticate() {
      // Simulate authentication logic. Replace this with your actual authentication process.
      return this.username === "yourUsername" && this.password === "yourPassword";
    }
  }
  
  // Example usage:
  // const customModal = new CustomModal('#3498db', 'yourUsername', 'yourPassword');
  
  window.CustomModal = CustomModal;
