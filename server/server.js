require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors()); // Allow your frontend to talk to this server
app.use(express.json({ limit: '10mb' })); // Allow large image uploads

const PORT = process.env.PORT || 3000;

// The Secure Endpoint
app.post('/api/analyze', async (req, res) => {
    try {
        const { image, userKey } = req.body;
        
        // Use Server Key by default, or User Key if provided
        const apiKey = userKey || process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: "Server misconfiguration: No API Key found." });
        }

        const base64Data = image.split(',')[1];

        // Call Google Gemini (The same logic that was in your frontend)
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        role: "user",
                        parts: [
                            { text: "ACT AS A DERMATOLOGIST..." }, // Your full system prompt goes here
                            { inlineData: { mimeType: "image/jpeg", data: base64Data } }
                        ]
                    }]
                })
            }
        );

        const data = await response.json();
        res.json(data); // Send the safe result back to the frontend

    } catch (error) {
        console.error("Analysis Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => console.log(`Secure Server running on port ${PORT}`));