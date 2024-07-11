document.addEventListener("DOMContentLoaded", () => {
    const operation = document.querySelector(".operation");
    const buttons = document.querySelectorAll(".buttons button");
    const output = document.querySelector(".output");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (button.classList.contains("clear")) {
                operation.textContent = "";
                output.textContent = "";
            } else if (button.classList.contains("backspace")) {
                operation.textContent = operation.textContent.slice(0, -1);
            } else if (button.classList.contains("equals")) {
                try {
                    output.textContent = eval(operation.textContent);
                } catch {
                    output.textContent = "Error";
                }
            } else {
                operation.textContent += buttonText;
            }
        });
    });
});