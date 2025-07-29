function copiarPix() {
    const chavePix = "48 98402 3936"; // sua chave PIX
    navigator.clipboard.writeText(chavePix).then(() => {
        document.getElementById("message").innerText =
            "Chave PIX copiada! Abra seu app do banco para realizar o pagamento. 💖";
    });
}