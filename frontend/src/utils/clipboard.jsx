export const copyToClipboard = async (text) => {
    if (text == null || text == '') {
        return "Password cannot be empty!";
    }
    try {
        await navigator.clipboard.writeText(text);
        console.log("Metin panoya kopyalandı!");
        console.log(text)

    } catch (error) {
        console.error("Panoya kopyalama hatası:", error);
    }
}

export const readFromClipboard = async () => {
    try {
        const text = await navigator.clipboard.readText();
        return text;
    } catch (error) {
        console.error("Panodan okuma hatası:", error);
        return "";
    }
}