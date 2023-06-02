const router = require("./router_import")

router.use("*",(req,res,callNext)=>{
    const {ip, method, originalUrl} = req

    res.on("finish",()=>{
        const {statusCode} = res

        console.log(`${statusCode} ${method} ${ip} ${originalUrl}`)
    })

    callNext();
})


module.exports = router