function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function validateEmail(email) {
  const regex = /^[^@]+@[^@]+\.[^@]+$/;
  return regex.test(email);
}

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();