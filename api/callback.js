export default function handler(req, res) {
    try {
        const accessToken = req.query.access_token;

        // Periksa apakah access_token tersedia
        if (!accessToken) {
            return res.status(400).json({ error: "Access Token not found" });
        }

        // Redirect ke Unity dengan access token
        const redirectUnity = `unitydl://aurality?access_token=${accessToken}`;
        res.redirect(307, redirectUnity); // Gunakan 307 untuk redirect sementara
    } catch (error) {
        console.error("Error in callback handler:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
