// Function to generate a UUID
const generateUUID = () => {
  // Generate random hexadecimal digits
  const generateDigits = (length) => {
    return [...Array(length)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  };

  // Create four groups of hexadecimal digits
  const segment1 = generateDigits(8);
  const segment2 = generateDigits(4);
  const segment3 = generateDigits(4);
  const segment4 = generateDigits(4);
  const segment5 = generateDigits(12);

  // Combine the segments with hyphens to form the UUID
  const uuid = `${segment1}-${segment2}-${segment3}-${segment4}-${segment5}`;

  // Return the generated UUID
  return uuid;
};

// Example usage
const myUUID = generateUUID();
console.log(myUUID);
