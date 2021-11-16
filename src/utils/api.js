class Api {
    constructor(option) {
        this._baseUrl = option.baseUrl
        this._headers = option.headers
    }

    _handleRes(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    }

    getImages() {
        return fetch(`${this._baseUrl}`, {
            headers: this._headers
        })
            .then((res) => {
                return this._handleRes(res)
            })
    }
}

const api = new Api({
    baseUrl: 'https://api.memegen.link/images',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api