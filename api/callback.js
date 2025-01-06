export default function handler(req, res) {
    try {
        // Ambil access_token dari query string
        const accessToken = req.query.access_token;

        console.log("Access Token from Query:", accessToken);

        // Jika token tidak ditemukan, kirimkan error
        if (!accessToken) {
            console.error("Access Token Missing");
            return res.status(400).json({ error: "Access Token not found" });
        }

        // Redirect ke Unity dengan access_token
        const redirectUnity = `unitydl://aurality?access_token=${accessToken}`;
        console.log("Redirecting to Unity:", redirectUnity);

        res.redirect(307, redirectUnity);
    } catch (error) {
        console.error("Error in Callback Handler:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
