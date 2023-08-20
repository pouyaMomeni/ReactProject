import React, {useEffect, useState} from 'react';
import useStyle from './styles';
import {getTestQuestions, getTestState} from "../../api/TestApi";
import Question from "./compoents/Question";
import {useUserState} from "../../context/UserContext";
import {toast} from "react-toastify";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Box, Tooltip} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import classnames from "classnames";


const Neo = (props) => {
    useEffect(() => {
    }, []);

    const [q, setQ] = useState(0);
    const [questions, setQuestions] = useState([]);
    const {identifier, single} = useUserState();

    useEffect(() => {
        getTestQuestions("enrich").then(ques => {
            getTestState(identifier, "enrich").then(res => {
                let lastAnswered;
                res.answered.forEach(ans => {
                    const index = ques.findIndex(item => {
                        // console.log(item.id, ans.question_id)
                        return item.question_no == ans.question_no;
                    });
                    if (index !== -1) {
                        ques = [...ques.slice(0, index), {
                            ...ques[index],
                            ans: ans.option_place
                        }, ...ques.slice(index + 1)];
                        lastAnswered = ques[index].question_no;

                    }
                })
                if (lastAnswered)
                    setQ(lastAnswered);
                setQuestions(ques);
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
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
        Promise.all([getTestState(identifier, "enrich")]).then(([neoState]) => {
            if (!neoState.done)
                return toast.warn("باید آزمون Enrich را کامل کنید");
            else props.history.push("/resultEnrich");
        }).catch(err => {
            console.log(err);
        });
    };

    const classes = useStyle();
    return (
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gridGap:'2rem',padding:'1rem',height:'92vh',border:'1px'}}>
        {/*<PageTitle title={"پرسش نامه NEO"} button={q === undefined && "شروع پرسشنامه"}*/}
        {/*           button2={"پیش بینی رضایت"}*/}
        {/*           onButton2Click={onResultClick}*/}
        {/*           onButtonClick={onButtonClick}/>*/}
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'65%',bgcolor:'#EFF6E0',height:'60%',borderRadius:'2rem'}}>
        <Box sx={{display:'flex',width:'75%',justifyContent:'space-evenly',padding:'0.3rem',marginBottom:'1rem',bgcolor:'#01161E',borderRadius:'1rem',color:'#AEC3B0'}}>
            {/*<img src={"/img/Woman.png"}/>*/}
            <h3>آزمون انریچ</h3>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <p className={classnames(classes.iden,classes.idenTitle)}>کد اختصاصی : </p>
            <Tooltip title={"این کد رو یه جا یادداشت کن و دفعه های بعد میتونی با این کد ادامه آزمون رو انجام بدی"}>
                <p className={classes.iden}>{identifier}</p>
            </Tooltip>
            </Box>
            {/* <p className={classes.iden}>جامعه هدف : مجردین</p> */}
            <Box  sx={{display:'flex',gridGap:'4px','&:hover': {
        cursor: 'pointer'
    }}}>
                <ExitToAppIcon/>
                <ButtonBase onClick={() => {
                sessionStorage.clear();
                window.location.reload();
                }}>خروج</ButtonBase>
            </Box>
        </Box>

        {(q !== undefined && questions.length > q) &&
        <Question isNeo={true} onResultClick={onResultClick} classes={classes} identifier={identifier}
                  q={questions[q]} index={q}
                  questionsLength={questions.length}
                  lastQ={lastQ}
                  nextQ={nextQ} setQuestions={setQuestions}/>}
        </Box>
    </Box>
    );
};

export default Neo;
