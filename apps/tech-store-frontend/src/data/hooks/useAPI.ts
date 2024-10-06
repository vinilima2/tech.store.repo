import { useCallback } from 'react'

const baseURL = process.env.NEXT_PUBLIC_API_URL

export default function useAPI() {
    const httpGet = useCallback(async function (path: string) {
        const uri = path.startsWith('/') ? path : `/${path}`
        const finalURL = `${baseURL}${uri}`

        const response = await fetch(finalURL)
        return formatData(response)
    }, [])

    const httpPost = useCallback(async function (path: string, body: any) {
        const uri = path.startsWith('/') ? path : `/${path}`
        const finalURL = `${baseURL}${uri}`

        const response = await fetch(finalURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        return formatData(response)
    }, [])

    async function formatData(response: Response) {
        let content = ''
        try {
            content = await response.text()
            return JSON.parse(content)
        } catch (e) {
            console.error(e)
            return content
        }
    }

    return { httpGet, httpPost }
}
