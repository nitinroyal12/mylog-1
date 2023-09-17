const find = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const key = jwt.verify(token, process.env.secret_key);
        console.log('key', key);
        console.log('key_email', key.email);
        const find = await Infomodel.findOne({
            data_h: key.email
        })
        if (find) {
            return res.status(200).json({
                message: "data find ",
                result: find
            })
        } else {
            return res.status(403).json({
                message: "Unauthorized",
                code: 403
            })
        }

    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}