const strip = (x: string | number) => {
    if (typeof x === 'number') {
        return x.toFixed(2)
    } 

    return x.trim()
}

class MyResponse {
    header = 'head'
    result = 'result'
}

class MyError {
    header = 'head'
    message = 'error'
}

const handle = (res: MyResponse | MyError) => {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

type AlertType = 'success' | 'danger' | 'warning'

const setAlert = (type: AlertType) => {}

setAlert('success')
