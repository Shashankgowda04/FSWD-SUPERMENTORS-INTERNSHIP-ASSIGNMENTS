// controllers/folderController.js
const getFolderData = (req, res) => {
    try {
        // Simulating the folder data retrieval
        const folderStructure = {
            assignmentName: "Folder Architect",
            currentPath: "C:\\Users\\nshas\\OneDrive\\Desktop\\supermentor internship assignments",
            filesFound: ["Weather App", "Mood Tracker", "Smart Signup"],
            status: "Success"
        };

        res.status(200).json(folderStructure);
    } catch (error) {
        // Implementing Error Handling (Learned 18/03)
        res.status(500).json({ 
            error: "Internal Server Error", 
            message: error.message 
        });
    }
};

module.exports = { getFolderData };