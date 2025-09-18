import React, { useContext } from 'react';
import { PreferencesContext } from '../context/PreferencesContext';

const PreferenceTracker: React.FC = () => {
    const { preferences, updatePreferences } = useContext(PreferencesContext);

    const handlePreferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        updatePreferences({ ...preferences, [name]: value });
    };

    return (
        <div className="preference-tracker">
            <h2>User Preferences</h2>
            <form>
                <div>
                    <label>
                        Dietary Restrictions:
                        <input
                            type="text"
                            name="dietaryRestrictions"
                            value={preferences.dietaryRestrictions}
                            onChange={handlePreferenceChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Allergies:
                        <input
                            type="text"
                            name="allergies"
                            value={preferences.allergies}
                            onChange={handlePreferenceChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Favorite Cuisines:
                        <input
                            type="text"
                            name="favoriteCuisines"
                            value={preferences.favoriteCuisines}
                            onChange={handlePreferenceChange}
                        />
                    </label>
                </div>
                <button type="submit">Save Preferences</button>
            </form>
        </div>
    );
};

export default PreferenceTracker;