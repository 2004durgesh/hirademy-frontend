const fetchData = async (url: string) => {
    try {
        const res = await fetch(url, {
            next: { revalidate: 3600 },
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error(`${error}`)
    }
}

export default fetchData;