const express = require('express');
const folderRoutes = require('./routes/folderRoutes');

const app = express();
app.use(express.json());

app.use('/api', folderRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Folder Architect server running at http://localhost:${PORT}`);
});