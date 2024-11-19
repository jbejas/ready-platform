const getLetterAtIndex = (index: number): string => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[index % 26];
}

export default getLetterAtIndex;
