import { useState, useEffect, useCallback } from 'react';
import { validateForm } from './Validation';

const CAR_TYPES = ['Sedan', 'SUV', 'Hatchback'];
const FUEL_TYPES = ['Petrol', 'Diesel', 'Electric'];

const validationRules = {
  carName: { 
    required: true, 
    minLength: 2 
  },
  typeName: { 
    required: true, 
    custom: (v: string) => !CAR_TYPES.includes(v) ? 'Please select valid type' : undefined 
  },
  licensePlate: { 
    required: true, 
    pattern: /^[A-Z0-9-\s]{3,12}$/ 
  },
  horsePower: { 
    required: true, 
    pattern: /^\d+$/,
    custom: (v: string) => {
      const num = parseInt(v);
      if (num <= 0) return 'Must be greater than 0';
      if (num > 2000) return 'Cannot exceed 2000';
      return undefined;
    }
  },
  fuelType: { 
    required: true, 
    custom: (v: string) => !FUEL_TYPES.includes(v) ? 'Please select valid fuel type' : undefined 
  }
};

export const useCarForm = () => {
  const [form, setForm] = useState({
    carName: '', typeName: '', licensePlate: '', horsePower: '', fuelType: '', additionalInfo: ''
  });
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dropdowns, setDropdowns] = useState({ type: false, fuel: false });

  const updateField = useCallback((field: string, value: string) => {
  setForm(prev => ({ ...prev, [field]: value }));
  if (errors[field]) {
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }
}, [errors]);

  const validate = useCallback(() => {
    const newErrors = validateForm(form, validationRules);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  const toggleDropdown = useCallback((dropdown: 'type' | 'fuel') => {
    setDropdowns(prev => ({
      type: dropdown === 'type' ? !prev.type : false,
      fuel: dropdown === 'fuel' ? !prev.fuel : false
    }));
  }, []);

  const selectOption = useCallback((field: 'typeName' | 'fuelType', value: string) => {
    updateField(field, value);
    setDropdowns({ type: false, fuel: false });
  }, [updateField]);

  useEffect(() => {
    const handleClickOutside = () => setDropdowns({ type: false, fuel: false });
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return {
    form, errors, isSubmitting, dropdowns,
    updateField, validate, toggleDropdown, selectOption,
    setIsSubmitting, CAR_TYPES, FUEL_TYPES
  };
};