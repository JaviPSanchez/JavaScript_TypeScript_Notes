// Es un type reciente, que da a entender que no queremos devolver nunca nada!

// It does not return void, returns never

//Esta funcion
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError('An error occurred!', 500);
console.log(result); //No vemos nada en la consola
