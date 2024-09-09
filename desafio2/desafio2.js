const checkLetterA = () => {
  const inputString = document.getElementById("inputString").value;
  const result = document.getElementById("result");
  const count = (inputString.match(/a/gi) || []).length;

  if (count > 0) {
    result.textContent = `A letra 'a' aparece ${count} vezes na string.`;
  } else {
    result.textContent = `A letra 'a' não foi encontrada na string`;
  }
};
