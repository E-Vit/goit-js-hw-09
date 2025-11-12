const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

let formData = {
    email: "",
    message: "",
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
}

form.addEventListener("input", (e) => {
    const { name, value } = e.target;
    if (name === "email" || name === "message") {
        formData[name] = value.trim();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);

    form.reset();
    formData = { email: "", message: "" };
    localStorage.removeItem(STORAGE_KEY);
});

