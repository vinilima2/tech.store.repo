import { useCallback } from 'react'

const baseURL = process.env.API_URL

export default function useAPI() {
    const httpGet = useCallback(async function (path: string) {
        const uri = path.startsWith('/') ? path : `/${path}`
        const completeURL = `${baseURL}${uri}`
        const response = await fetch(completeURL)
        return extractData(response)
    }, [])

    const httpPost = useCallback(async function (path: string, body: any) {
        const uri = path.startsWith('/') ? path : `/${path}`
        const completeURL = `${baseURL}${uri}`

        const response = await fetch(completeURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        return extractData(response)
    }, [])

    async function extractData(response: Response) {
        let content = ''
        try {
            content = await response.text()
            return JSON.parse(content)
        } catch (e) {
            return content
        }
    }

    return { httpGet, httpPost }
}
