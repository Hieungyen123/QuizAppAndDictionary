import React, { useState, useEffect } from "react";
import axios from 'axios'

// axios.defaults.baseURL = 'https://opentdb.com/';

const useAxios = ({url}) => {

    const [response, setResponse] = useState(null)
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(url)
                .then(res => setResponse(res.data))
                .catch(err => setErr(err))
                .finally(() => setLoading(false))
        }
        fetchData()
    },[url])

    return {response,err,loading}
}

export default useAxios
