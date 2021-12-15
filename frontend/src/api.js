const apiBase = 'http://localhost:3000';

// Get the dollar amount from the back end
export async function fetchDollarAmount() {
  console.log('API URL', `${apiBase}/amount`);
  const httpResponse = await fetch(`${apiBase}/amount`);
  const data = await httpResponse.json();
  return data.amount;
}

// Add or subtract some amount from the dollar amount stored on the back end
export async function updateDollarAmount(dollarDifference) {
  const prevDollarAmount = await fetchDollarAmount();
  const newDollarAmount = prevDollarAmount + dollarDifference;
  await fetch(`${apiBase}/edit/amount/${newDollarAmount}`);
}