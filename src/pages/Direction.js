// import  { useState } from 'react'

import { Box, Button, CircularProgress, Typography } from "@mui/material";

import styled from "../scss/Direction.module.scss";
import classNames from "classnames/bind";
import TextFeild from "../components/TextFeild";
import ButtonCompo from '../components/Button';
// import UseAxios from '../hooks/useAxios';
import axios from 'axios'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import React, { useState, useEffect } from "react";

const Direction = () => {
    const cx = classNames.bind(styled);

    const [word, SetWord] = useState('')
    const [response, setResponse] = useState(null)
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(null)

    const handleChange = (e) => {
        SetWord(e.target.value)
    }

    var Apiurl = `https://api.dictionaryapi.dev/api/v1/entries/en/${word}`

    const HandleOnclick = () => {
        setErr('')
        axios
            .get(Apiurl)
            .then(res => {
                setResponse(res.data)
                setLoading(true)
            }
            )
            .catch(err => setErr(err))
            .finally(() => setLoading(false))
    }
    // console.log(err)
    var wordText
    if (response) {
        var wordArr = response[0]
        // console.log(wordArr)
        wordArr.phonetics.map((phonetic) => {
            if (phonetic.text && phonetic.audio !== '') {
                wordText = phonetic
                // console.log(wordText)
            }

        })
    }


    const start = () => {

        if (wordText) {
            var audio = new Audio(wordText.audio)
        }
        audio.play()
    }

    // if (loading) {
    //     return (
    //         <div className={cx('loading')}> <CircularProgress /></div>
    //     )
    // }

    return (
        <div className={cx('Direction')}>
            <div className={cx('Direction-Find')}>
                <div className={cx('input')}><TextFeild handle={handleChange} type={'text'} label={'Find in dictionary'} /></div>
                <ButtonCompo handle={HandleOnclick} label={'Find'} type='medium' variant="contained" />
            </div>
            {err ?
                (
                    <div>
                        {err.response.data.message}
                    </div>
                ) : ''
            }
            {loading ? (<div className={cx('loading')}> <CircularProgress /> </div>) : " "}
            {wordArr ? (
                <div className={cx('Search-content')}>
                    <div className={cx('Type-word')}>
                        {
                            wordArr.meaning.hasOwnProperty('noun') ?
                                <Button
                                    variant="outlined"
                                    size="small"
                                >
                                    Noun
                                </Button>
                                : ''
                        }
                        {
                            wordArr.meaning.hasOwnProperty('verb') ?
                                <Button
                                    variant="outlined"
                                    size="small"
                                >
                                    Verb
                                </Button>
                                : ''
                        }
                        {
                            wordArr.meaning.hasOwnProperty('adverb') ?
                                <Button
                                    variant="outlined"
                                    size="small"
                                >
                                    Adverb
                                </Button>
                                : ''
                        }
                    </div>
                    <div className={cx('content')}>

                        <div className={cx('title-content')}>
                            <h4 >{wordArr.word} : {wordText.text} </h4>
                            <VolumeUpOutlinedIcon onClick={start} className={cx('icon-audio')} />

                        </div>

                        <div className={cx('content-meaning')}>


                            <div>
                                {wordArr?.meaning?.noun ? <h3>Noun:</h3> : ''}
                                {wordArr?.meaning?.noun ? wordArr?.meaning?.noun.map((arr, index) => {
                                    return (
                                        <div key={index}>
                                            <div className={cx('meaning')}>
                                                <ArrowForwardIcon />
                                                {arr.definition}
                                            </div>
                                        </div>
                                    )
                                }) : ''}
                            </div>


                            <div>
                                {wordArr?.meaning?.verb ? <h3>Verb:</h3> : ''}
                                {wordArr?.meaning?.verb ? wordArr?.meaning?.verb.map((arr, index) => {
                                    return (
                                        <div key={index}>
                                            <div className={cx('meaning')}>
                                                <ArrowForwardIcon />
                                                {arr.definition}
                                            </div>
                                        </div>
                                    )
                                }) : ''}
                            </div>

                            <div>
                                {wordArr?.meaning?.adverb ? <h3>Adverb:</h3> : ''}
                                {wordArr?.meaning?.adverb ? wordArr?.meaning?.adverb.map((arr, index) => {
                                    return (
                                        <div key={index}>
                                            <div className={cx('meaning')}>
                                                <ArrowForwardIcon />
                                                {arr.definition}
                                            </div>
                                        </div>
                                    )
                                }) : ''}
                            </div>

                        </div>

                        <div className={cx('example')}>
                            {wordArr?.meaning?.interjection ? (<h3>Example:</h3>) : ''}
                            
                            {wordArr?.meaning?.interjection ? wordArr?.meaning?.interjection.map((arr, index) => {
                                return (
                                    <div key={index}>

                                        <div className={cx('meaning')}>
                                            {arr.example}
                                        </div>
                                    </div>
                                )
                            }) : ''}
                        </div>
                    </div>
                </div>
            ) : ''
            }

        </div>
    )
}

export default Direction
