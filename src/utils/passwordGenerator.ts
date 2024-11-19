type Charset = {
  lowercase: string;
  uppercase: string;
  numbers: string;
  symbols: string;
};

const generatePassword = (): string => {
  const charset: Charset = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%*()?",
  };

  // Ensures the password includes at least one character from each set
  const mandatoryCharacters = [
    charset.lowercase[Math.floor(Math.random() * charset.lowercase.length)],
    charset.uppercase[Math.floor(Math.random() * charset.uppercase.length)],
    charset.numbers[Math.floor(Math.random() * charset.numbers.length)],
    charset.symbols[Math.floor(Math.random() * charset.symbols.length)],
  ];

  const allCharacters: string =
    charset.lowercase + charset.uppercase + charset.numbers + charset.symbols;
  const remainingLength: number = 24 - mandatoryCharacters.length;

  let password: string = mandatoryCharacters.join("");

  for (let i = 0; i < remainingLength; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  // Shuffle the password to ensure mandatory characters are not at the beginning
  password = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  return password;
};

export default generatePassword;
