// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage:
const originalNames = ['Kwesi', 'Ama', 'Yaw', 'Kofi', 'Naa'];
const modifiedNames = ['KWESI', 'ama', 'YAW', 'kofi', 'NAA']; // Assume these are modified by formatArrayStrings
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
// Output: 
// [
//     { id: 1, originalName: 'Kwesi', modifiedName: 'KWESI' },
//     { id: 2, originalName: 'Ama', modifiedName: 'ama' },
//     { id: 3, originalName: 'Yaw', modifiedName: 'YAW' },
//     { id: 4, originalName: 'Kofi', modifiedName: 'kofi' },
//     { id: 5, originalName: 'Naa', modifiedName: 'NAA' }
// ]

// Export the function for use in other files
module.exports = { createUserProfiles };
git add userInfo.js
git commit -m "The createUserProfiles function for Task 3"

