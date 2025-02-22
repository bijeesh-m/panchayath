const certifivcateModel = require("../Model/certificateModel");

module.exports.fetchAllCertificate = async (req, res, next) => {
    try {
        const certificateData = await certifivcateModel.find({});
        if (certificateData) {
            return res.json({ certificate: certificateData, status: true });
        } else {
            return res.json({ status: false });
        }
    } catch (Error) {
        return res.json({ message: "Internal server error", status: false });
    }
};

module.exports.certRequireMent = async (req, res) => {
    try {
        const { certificateId } = req.params;

        // Find the certificate document by ID and return only the requirements field
        const certificate = await certifivcateModel.findById(certificateId, "requirements");

        if (!certificate) {
            return res.status(404).json({ message: "Certificate not found", status: false });
        }

        return res.json({ requirements: certificate.requirements, status: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", status: false });
    }
};
