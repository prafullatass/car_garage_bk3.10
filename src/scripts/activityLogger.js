const logOfActivity = []

const ActivityLogger = {
    add: function (message) {
        logOfActivity.push({
            message: message,
            timeStamp: Date.now()
        })
    },
    view: function () {
        return logOfActivity
    },
    viewAsHTML: function () {
        const htmlString = logOfActivity.map(
            (logMessage) => {
                return `
                    <section>
                        <h2>${logMessage.message}</h2>
                        <div>Timestamp: ${logMessage.timeStamp}</div>
                    </section>
                `
            }
        ).join("")

        return htmlString
    }
}


export default ActivityLogger
