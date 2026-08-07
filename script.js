function orderItem(itemName) {

    const phoneNumber = "010152891270";

    const message =
        "Hello Renato Bakery! I would like to order: " + itemName;

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
