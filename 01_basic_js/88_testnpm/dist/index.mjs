export function msg(str) {
  if (!str) {
    console.log('Please provide a string as the argument.')
  }
  console.log(`The message: ${str}`);
}
