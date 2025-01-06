export default function handler(req, res) {
    try {
        // Ambil access_token dari query string
        const accessToken = req.query.access_token;

        if (!accessToken) {
            // Jika tidak ada access_token, kirimkan pesan error
            return res.status(400).json({ error: "Access Token not found" });
        }

        // Redirect ke Unity dengan access_token
        const redirectUnity = `unitydl://aurality?access_token=${accessToken}`;
        res.redirect(307, redirectUnity);
    } catch (error) {
        console.error("Error in callback handler:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
