// uma par que é chave e valor
// as chaves sao unicas o valor pode repetir
// chaves nunca se repetem , valores podem se repetir
const contacts = new Map();
contacts.set('Jessie', {phone: "213-555", address: "123 N 1st Ave"})
contacts.has('Jessie') //true
contacts.get('Hilary') //undefined
contacts.set('Hilary',{phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') /// {phone: "213-555", address: "123 N 1st Ave"})
contacts.delete('Raymond') //false
contacts.delete('Jessie') //true
console.log(contacts.size) //1
