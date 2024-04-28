import { Box, Button, CircularProgress, Typography } from "@mui/material";
import SelectedField from "../components/SelectedField";
import styled from "../scss/Setting.module.scss";
import classNames from "classnames/bind";
import TextFeild from "../components/TextFeild";
import UseAxios from "../hooks/useAxios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { handleAmountQuestions } from '../redux/action'
import { useSelector } from "react-redux";

function SettingScreen() {
    const cx = classNames.bind(styled);

    const { response, err, loading } = UseAxios({ url: 'https://opentdb.com/api_category.php' })
    const navigate = useNavigate();
    console.log(response)
    const dispatch = useDispatch()
    if (loading) {
        return (
            <div className={cx('loading')}> <CircularProgress /></div>
        )
    }
    if (err) {
        return (
            <Typography variant="h6" mt={20}>
                Some Thing Went Wrong!
            </Typography>
        )
    }

    const difOptions = [
        { id: 'easy', name: 'Easy' },
        { id: 'medium', name: 'Medium' },
        { id: 'hard', name: 'Hard' },
    ]
    const typeOptions = [
        { id: 'multiple', name: 'Multiple Choise' },
        { id: 'boolean', name: 'True/False' },
    ]
    const handleChange = (e) => {
        dispatch(handleAmountQuestions(e.target.value))
    
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/quiz/questions')
    }
    return (
        <div className={cx('setting')}>
            <form onSubmit={handleSubmit}>


                <div className={cx('input')}> <SelectedField options={response.trivia_categories} label={'Category'} /></div>
                <div className={cx('input')}> <SelectedField options={difOptions} label={'Level'} /></div>
                <div className={cx('input')}><SelectedField options={typeOptions} label={'Type'} /></div>
                <div className={cx('input')}><TextFeild handle={handleChange} type={'number'} label={'Number of Questions'} /></div>
                <div className={cx('button')}>

                    <Button variant="contained" type="submit" >
                        Get started 
                    </Button>

                </div>
            </form>
        </div>
    );
}

export default SettingScreen;