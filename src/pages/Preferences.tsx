import React from 'react';
import { usePreferences } from '../hooks/usePreferences';

const Preferences: React.FC = () => {
    const { preferences, updatePreferences } = usePreferences();

    const handlePreferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        updatePreferences(name, value);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Manage Your Preferences</h1>
            <form className="mt-4">
                <div>
                    <label className="block">
                        <span className="text-gray-700">Dietary Restrictions</span>
                        <input
                            type="text"
                            name="dietaryRestrictions"
                            value={preferences.dietaryRestrictions}
                            onChange={handlePreferenceChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
                        />
                    </label>
                </div>
                <div className="mt-4">
                    <label className="block">
                        <span className="text-gray-700">Allergies</span>
                        <input
                            type="text"
                            name="allergies"
                            value={preferences.allergies}
                            onChange={handlePreferenceChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500"
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Save Preferences
                </button>
            </form>
        </div>
    );
};

export default Preferences;