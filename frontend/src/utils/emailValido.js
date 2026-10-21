export const emailValido = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return typeof email === "string" && email.length <= 254 && regex.test(email.trim());
};
