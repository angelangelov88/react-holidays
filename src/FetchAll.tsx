// import { useEffect, useState } from "react"

// const FetchAll = (url, url2) => {

//   // const url = 'https://holidayapi.com/v1/holidays?pretty&country=${country}&year=2020&key=6ed5a947-e77b-4b5f-8d89-f467c29db15a';

//   // const country = 'AD'

//   const [data, setData] = useState(null)
//   const [isPending, setIsPending] = useState(true)
//   const [error, setError] = useState(null)


//   useEffect(() => {
//     const abortCont = new AbortController()

//     Promise.all([
//       fetch(url, { signal: abortCont.signal }),
//       fetch(url2, { signal: abortCont.signal })

//     ])
//     .then(res => {
//       console.log(error)
//       if (!res.ok) {
//         throw Error('Could not fetch the data for that resource')
//       }
//       return res.json()
//     })
//     .then((data) => {
//       setData(data)
//       // console.log(data)
//       setIsPending(false)
//       setError(null)
//     })
//     .catch(err => {
//       if (err.name === 'AbortError') {
//         console.log('fetch aborted')
//       } else {
//         setIsPending(false)
//         setError(err.message)
//       }
//     })
//     return () => abortCont.abort()
//   }, [url, url2])

//     return { data, isPending, error }
// }


// export default FetchAll