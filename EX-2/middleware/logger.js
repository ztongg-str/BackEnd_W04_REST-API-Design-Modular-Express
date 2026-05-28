const logger = (req, res, next) => {
    console.log({
        "Date": new Date().toISOString(), "method": req.method, "url": req.url
    });
    next();
}

export { logger };