const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector("input[name=nome]").value;
    const email = document.querySelector("input[name=email]").value;
    const mensagem = document.querySelector("textarea[name=mensagem]").value;

   fetch("https://api.sheetmonkey.io/form/cKsJcX5RFdV6itvWYPp2Py", {

        method: "POST",
        headers: {
          "Accept":  "application/json",
            "Content-Type": "application/json", 
        },
        body: JSON.stringify({name: name, email: email, mensagem: mensagem})
        
   }).then(() => {
        alert("Mensagem enviada com sucesso!");
        document.querySelector("form").reset();
    }).catch(() => alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."));


}

document.querySelector("form").addEventListener("submit", handleSubmit); 

