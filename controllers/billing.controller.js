const getLatestOffers = async (req, res) => {
    try{
        console.log("Billing details returned");
        res.status(200).send({
            'msg' : 'Billing Details',
            "plans" : [
                {
                    "planName" : "Mobile",
                    "videoQuality" : "Good",
                    "Resolution" : "480p",
                    "MonthlyPrice" : "₹ 100",
                    "yearlyPrice" : "₹ 1000",
                    "devices" : ["Phone", "Tablet"]
                },{
                    "planName" : "Basic",
                    "videoQuality" : "Good",
                    "Resolution" : "480p",
                    "MonthlyPrice" : "₹ 200",
                    "yearlyPrice" : "₹ 2000",
                    "devices" : ["Phone", "Tablet", "Computer", "TV"]
                },{
                    "planName" : "Standard",
                    "videoQuality" : "Better",
                    "Resolution" : "1080p",
                    "MonthlyPrice" : "₹ 500",
                    "yearlyPrice" : "₹ 5000",
                    "devices" : ["Phone", "Tablet", "Computer", "TV"]
                },{
                    "planName" : "Premimum",
                    "videoQuality" : "Best",
                    "Resolution" : "4k+HDR",
                    "MonthlyPrice" : "₹ 700",
                    "yearlyPrice" : "₹ 7000",
                    "devices" : ["Phone", "Tablet", "Computer", "TV"]
                }
            ]
        });
    } catch(err){
        console.log(err);
        res.status(500).send({
            'msg' : 'Internal Server Error',
        })
    }
}

module.exports = {
    getLatestOffers
}