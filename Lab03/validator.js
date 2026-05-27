// ============================================================
// Завдання 4 — Валідатор паролів
// ============================================================

const WEAK_PASSWORDS = ["password", "12345678", "qwerty", "admin"];

function validatePassword(password) {
  const errors = [];

  if (password.length < 8) {
    errors.push("Довжина < 8");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Немає великих літер");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Немає малих літер");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("Немає цифр");
  }

  if (!/[!@#$%^&*]/.test(password)) {
    errors.push("Немає спецсимволів");
  }

  if (/ /.test(password)) {
    errors.push("Не повинен містити пробіли");
  }

  if (WEAK_PASSWORDS.includes(password.toLowerCase())) {
    errors.push("Це слабкий пароль");
  }

  return {
    valid: errors.length === 0,
    errors: errors
  };
}

// ============================================================
// Тестові кейси
// ============================================================
console.log("Пароль 'Abc1' ->", validatePassword("Abc1!def"));
// { valid: true, errors: [] }

console.log("Пароль 'abc' ->", validatePassword("abc"));
// { valid: false, errors: [ 'Довжина < 8', 'Немає великих літер', 'Немає цифр', 'Немає спецсимволів' ] }

console.log("Пароль 'password' ->", validatePassword("password"));
// { valid: false, errors: [ 'Немає великих літер', 'Немає цифр', 'Немає спецсимволів', 'Це слабкий пароль' ] }

console.log("Пароль 'MyPass 1!' ->", validatePassword("MyPass 1!"));
// { valid: false, errors: [ 'Не повинен містити пробіли' ] }

console.log(validatePassword(""));
// { valid: false, errors: [ 'Довжина < 8', 'Немає великих літер', 'Немає малих літер', 'Немає цифр', 'Немає спецсимволів' ] }

