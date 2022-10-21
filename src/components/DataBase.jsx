import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import './dataBase.css'
import { DotSpinner } from '@uiball/loaders'

const DataBase = () => {

    const URL = 'https://script.google.com/macros/s/AKfycbxNCNZg2fqtqSbEKs52io1xsYzD04ZJH-UkSLiWVPswWFVh6nC2fwIVmloLxjO-ZCk55w/exec?action=data'


    const [catchData, setCatchData] = useState()
    const [loadingScreen, setLoadingScreen] = useState(true)

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setCatchData(res.data)
                setLoadingScreen(false)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <article className="data-base">
            {loadingScreen ?
                <DotSpinner
                    size={40}
                    speed={0.9}
                    color="black"
                />
                :
                ''
            }

            {loadingScreen ?
                ''
                :
                (
                    catchData?.map((user, index) => {
                        return (
                            <Card key={index} user={user} />
                        )
                    })
                )
            }


        </article>
    )
}

export default DataBase