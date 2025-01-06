export default function handler(req, res) {
    try {
        const accessToken = req.query.access_token;

        console.log("Access Token from Query:", accessToken);

        if (!accessToken) {
            return res.status(400).json({ error: "Access Token not found" });
        }

        const redirectUnity = `unitydl://aurality?access_token=${accessToken}`;
        console.log("Redirecting to Unity:", redirectUnity);

        res.redirect(307, redirectUnity);
    } catch (error) {
        console.error("Error in callback handler:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
