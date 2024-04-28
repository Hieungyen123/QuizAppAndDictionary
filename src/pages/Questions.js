import { Box, Button, CircularProgress, Typography } from "@mui/material";

import styled from "../scss/Question.module.scss";
import classNames from "classnames/bind";
import UseAxios from "../hooks/useAxios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { handleScoreQuestions } from "../redux/action";
import {decode} from 'html-entities';
import ButtonCompo from "../components/Button";


function Questions() {
    const cx = classNames.bind(styled);

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {
        question_category,
        question_difficalty,
        question_type,
        amount_question,
        score
    } = useSelector(state => state)
    // console.log(amount_question)
    console.log(question_category,question_difficalty,question_type)

    

    let Apiurl = `https://opentdb.com/api.php?amount=${amount_question}`
    if (question_category) {
        Apiurl = Apiurl.concat(`&category=${question_category}`)
    }
    if (question_difficalty) {
        Apiurl = Apiurl.concat(`&difficulty=${question_difficalty}`)
    }
    if (question_type) {
        Apiurl = Apiurl.concat(`&type=${question_type}`)
    }

    // console.log(Apiurl)
    
    const { response, err, loading } = UseAxios({ url: Apiurl })
    const [quesIndex, setQuesIndex] = useState(0)
    const [option, setOption] = useState([]);
    // console.log(option)

    const ramdomInt = (max) => {
        return Math.random(Math.random() * Math.floor(max))
    }
    
    useEffect(() => {
            if (response?.results.length) {
                let question = response.results[quesIndex]
                let answer = [...question.incorrect_answers]
                answer.splice(
                    ramdomInt(question.incorrect_answers.length), 0,
                    question.correct_answer
                )
                setOption(answer)
            }
        
        
    }, [response, quesIndex])
    

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/quiz')
    }
    console.log(response)
    if (loading) {
        return (
            <div className={cx('loading')}> <CircularProgress /></div>
        )
    }
    if (response.results.length < 1) {
        return (
            <div className={cx('loading')}>
                 Không đủ số lượng câu hỏi  
                 <Button 
                   onClick={handleBack}
                 >
                    Trở về
                </Button>
            </div>
        )
    }
    

    const handleButton = (e) => {
        e.preventDefault();
        let question = response.results[quesIndex]
        if(e.target.textContent === question.correct_answer ) {
            dispatch(handleScoreQuestions(score + 1))
        }
        if(quesIndex + 1 < response.results.length) {
            setQuesIndex(quesIndex + 1)
        } else {
            navigate('/quiz/score')
        }
    }
    return (
        <div className={cx('ques')}>
            {/* {response.results.length > 0 ?  ( */}
                {/* // <div className={cx('ques')}> */}
                    <Typography variant="h5">
                    Question {quesIndex + 1}:
                </Typography>
                <Typography mt={3}>
                    {decode(response.results[quesIndex].question)}
                </Typography>
                <div className={cx('box-ques')}>
    
                    {option.map((data, id) => {
                        return (
                            <Box  m={2} key={id}>
                                <Button onClick={handleButton} size="large" fullWidth variant="outlined">{decode(data)}</Button>
                            </Box>
                        )
                    })}
                </div>
                <Box mt={5}>
                    score: {score}/{response.results.length}
                </Box>
                {/* // </div> */}
            {/* // ) : 'lỗi không đủ câu hỏi cho phần này rồi'} */}
        </div>
    );
}

export default Questions;