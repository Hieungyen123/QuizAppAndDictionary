import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { handleAmountQuestions, handleScoreQuestions } from "../redux/action";
import styled from "../scss/App.module.scss";
import classNames from "classnames/bind";
function FinalScore() {
    const cx = classNames.bind(styled);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { score } = useSelector(state => state) 
    const handleBackToSetting = () => {
        dispatch(handleScoreQuestions(0))
        dispatch(handleAmountQuestions(10))
        navigate('/quiz')
    }
    return (  
        <div  className={cx("final")}>
            <Typography variant="h4" fontWeight='blod' mb={3}>Final score {score}</Typography>
            <Button variant="outlined"  onClick={handleBackToSetting}    > Back to setting </Button>
        </div>
    );
}

export default FinalScore;