export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | undefined;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export const validateField = (value: string, rules: ValidationRule): string | undefined => {
  if (rules.required && !value.trim()) {
    return 'This field is required';
  }

  if (rules.minLength && value.trim().length < rules.minLength) {
    return `Must be at least ${rules.minLength} characters long`;
  }

  if (rules.maxLength && value.trim().length > rules.maxLength) {
    return `Cannot exceed ${rules.maxLength} characters`;
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    return 'Invalid format';
  }

  return rules.custom?.(value);
};

export const validateForm = (data: Record<string, string>, rules: ValidationRules): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  Object.entries(rules).forEach(([field, rule]) => {
    const error = validateField(data[field] || '', rule);
    if (error) errors[field] = error;
  });

  return errors;
};