const calculatePasswordStrength = (length) => {
    if (length <= 4) return 1;
    if (length <= 8) return 2;
    if (length <= 12) return 3;
    if (length <= 16) return 4;
    return 5;
};

export default calculatePasswordStrength