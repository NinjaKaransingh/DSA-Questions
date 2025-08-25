// Truncate the text
// WAP fuction called truncate that checks the length of a given string - str and if it surpasses a specified max length - maxLength it replaces that ernd of the string with the ellipsis character "..."

// i/p - str -> "Subscribe to Roadsidecoded" maxLength -> 9
// o/p -> "Subscribe..."

function truncate(str, maxLength) {
    if(!str.length > maxLength) return str;
    return str.slice(0,maxLength) + "...";
}

console.log(truncate("Subscribe to Roadsidecode", 9));