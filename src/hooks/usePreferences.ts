import { useState, useEffect } from 'react';

interface UserPreferences {
  dietaryRestrictions: string[];
  allergies: string[];
}

const usePreferences = () => {
  const [preferences, setPreferences] = useState<UserPreferences>({
    dietaryRestrictions: [],
    allergies: [],
  });

  useEffect(() => {
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const updatePreferences = (newPreferences: UserPreferences) => {
    setPreferences(newPreferences);
    localStorage.setItem('userPreferences', JSON.stringify(newPreferences));
  };

  return {
    preferences,
    updatePreferences,
  };
};

export default usePreferences;