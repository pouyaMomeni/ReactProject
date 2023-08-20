import React, {useEffect, useState} from 'react';
import useStyle from './styles';
import {getTestQuestions, getTestState} from "../../../api/TestApi";
import Question from "./Question";
import {useUserState} from "../../../context/UserContext";
import {toast} from "react-toastify";
import {Box, Tooltip,Button} from "@material-ui/core";
import NavBar from '../../../components/Header/navBar';
import Footer from '../../../components/Footer/Footer';
import CircularProgress from '@material-ui/core/CircularProgress';

const Glaser = (props) => {

    const [q, setQ] = useState(0);
    const [questions, setQuestions] = useState([]);
    const {identifier, single} = useUserState();

    useEffect(() => {
        getTestQuestions("neo").then(ques => {
            getTestState(identifier, "neo").then(res => {
                // "answered":[{"option_place":1,"question_id":1,"question_text":"من آدم نگرانی هستم."},{
                let lastAnswered;
                res.answered.forEach(ans => {
                    const index = ques.findIndex(item => {
                        return item.id == ans.question_id;
                    });
                    if (index !== -1) {
                        ques = [...ques.slice(0, index), {
                            ...ques[index],
                            ans: ans.option_place
                        }, ...ques.slice(index + 1)];
                        lastAnswered = ques[index].id;
                    }
                });
                if (lastAnswered && lastAnswered!==ques.length)
                    setQ(lastAnswered);
                setQuestions(ques);
            }).catch(err => {
                console.log(err);
            })
        }).catch(err=>{
            console.log(err);
        });
    }, [identifier]);

    const nextQ = (index) => {

        setQ(q => index + 1);
    };
    const lastQ = () => {
        setQ(q => q - 1);
    };
    const onResultClick = () => {
        Promise.all([getTestState(identifier, "neo")]).then(([neoState]) => {
            if (!neoState.done)
                return toast.warn("باید آزمون نئو را کامل کنید");
            else props.history.push("/resultNeoPage");
        }).catch(err => {
            console.log(err)
        });
    };
    const classes = useStyle();
    return (
        <>
        <NavBar/>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gridGap:'2rem',padding:'1rem',bgcolor:'white ',width:'100%',marginBottom:'8rem'}}>
            <Box className='border-question' sx={{display:'flex',alignItems:'center',width:{xs:'100%',sm:'100%',md:'100%',lg:'50%'},justifyContent:'space-around'}}>
                <Box sx={{display:'flex',alignItems:'center',gridGap:'10px'}}>
                    <Box sx={{fontSize:'0.8rem',bgcolor:'#006666',alignItems:'center',display:'flex',padding:'0.3rem',color:'white'}}>آزمون Neo</Box>
                    <Box sx={{display:"flex",alignItems:'center',justifyContent:'center',gridGap:'5px',fontSize:'0.9rem'}}>
                        <Box>کد اختصاصی : </Box>
                        <Box sx={{display:'flex'}} >
                            <Tooltip title={"این کد رو یه جا یادداشت کن و دفعه های بعد میتونی با این کد ادامه آزمون رو انجام بدی"}>
                            <Box onClick={() => {
                                navigator.clipboard.writeText(identifier);
                                toast.success("کد اختصاصی کپی شد");
                            }}
                            sx={{'&:hover': {cursor: 'pointer'}}}>
                                {identifier}
                            </Box>
                            </Tooltip>
                        </Box>
                    </Box>
                </Box>
                <Box >
                    <Button onClick={() => {
                    sessionStorage.clear();
                    window.location.reload();}}
                    style={{color:'#006666',fontSize:'1.1rem'}}
                    >خروج
                    </Button>
                </Box>
            </Box>
            {q !== undefined && questions.length > q  ? 
            <Question isNeo={true} onResultClick={onResultClick} classes={classes} identifier={identifier}
                      q={questions[q]} index={q}
                      questionsLength={questions.length}
                      lastQ={lastQ}
                      nextQ={nextQ} setQuestions={setQuestions}/>:
                        <Box sx={{ display: 'flex',gridGap:'10px',flexDirection:'column',alignItems:'center',height:'30rem',fontSize:'1.6rem',mt:'4rem' }}>
                            <Box>لطفا شکیبا باشید</Box>
                            <CircularProgress />
                        </Box>
                      }
        </Box>
        </>
    );


};

export default Glaser;
