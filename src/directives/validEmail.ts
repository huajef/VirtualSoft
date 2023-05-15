import { Directive } from 'vue';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ValidEmailDirective: Directive<HTMLElement> = (el, binding) => {
  const input = el as HTMLInputElement;

  input.addEventListener('input', () => {
    const email = input.value;
    const isValid = emailRegex.test(email);

    if (!isValid) {
      input.setCustomValidity('El correo electrónico no es válido');
    } else {
      input.setCustomValidity('');
    }
  });

  input.addEventListener('blur', () => {
    input.reportValidity();
  });
};

export default ValidEmailDirective;
