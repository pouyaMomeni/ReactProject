import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ansQ } from "../../../api/TestApi";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
const Question = ({
  q = {},
  classes,
  index,
  isNeo,
  questionsLength,
  identifier,
  onResultClick,
  nextQ,
  lastQ,
  setQuestions,
}) => {
  const [ans, setAns] = useState();
  const [loading, setLoading] = useState();
  const history = useHistory();

  const enrich = () => {
    history.push("/enrich");
  };
  const neo = () => {
    history.push("/neo");
  };
  const eq = () => {
    history.push("/eq-i");
  };
  const ghq = () => {
    history.push("/ghq");
  };

  const quit = () => {
    toast.success("با موفقیت ذخیره شد");
  };

  const selectAns = (id,place) => {
    const ans = {
      question_id: q.id,
      identifier: identifier,
      option_id: id,
    };
    setLoading(true);
    ansQ(ans)
      .then(res => {
        const newVal = { ans: place % 5 === 0 ? 5 : place % 5 };
        setQuestions(questions => [
          ...questions.slice(0, index),
          {
            ...questions[index],
            ...newVal,
          },
          ...questions.slice(index + 1),
        ]);
        if (index === questionsLength - 1) return;
        setTimeout(() => {
          setLoading(false);
          return nextQ(index);
        }, 200);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{ color: "#01161E", fontSize: "1.1rem" }}>
        <p style={{color:'#006666'}}>
          {q.question_no}. {q.question_text}
        </p>
      </Box>
      <ul className={classes.options}>
        {q.options && (
          <>
            <li
              onClick={() => !loading && selectAns(q.options[2].id,q.options[2].option_place)}
              className={q.ans === 3 && classes.optionActive}
            >
              {q.options[2].option_text}
            </li>
            <li
              onClick={() => !loading && selectAns(q.options[1].id,q.options[1].option_place)}
              className={q.ans === 2 && classes.optionActive}
            >
              {q.options[1].option_text}
            </li>
            <li
              onClick={() => !loading && selectAns(q.options[0].id,q.options[0].option_place)}
              className={q.ans === 1 && classes.optionActive}
            >
              {q.options[0].option_text }
            </li>
          </>
        )}
      </ul>
      {/*</RadioGroup>*/}
      <Grid container justify={"center"}>
        {index !== 0 &&
        questionsLength !== 1 &&
        index !== questionsLength - 1 ? (
          <Button
            size={"small"}
            className={classes.lastQ}
            variant={"contained"}
            onClick={lastQ}
          >
            قبلی
          </Button>
        ) : null}
        {index !== 0 && index !== questionsLength - 1 ? (
          <Button
            size={"small"}
            className={classes.lastQ}
            variant={"contained"}
            onClick={quit}
          >
            ذخیره تا این مرحله
          </Button>
        ) : null}
        {index !== questionsLength - 1 && q.ans && (
          <Button
            size={"small"}
            className={classes.lastQ}
            variant={"contained"}
            onClick={() => nextQ(index)}
          >
            سوال بعد
          </Button>
        )}
      </Grid>
      <br />
      <br />
      {index === questionsLength - 1 && q.ans && (
        <Grid container justify={"center"}>
          <Button
            size={"small"}
            className={classes.lastQ}
            variant={"contained"}
            onClick={onResultClick}
          >
            دیدن نتیجه
          </Button>
        </Grid>
      )}
      <div className={classes.progress}>
        <p>میزان پیشرفت</p>
        <p>
          {index + 1} از {questionsLength}
        </p>
        <div
          style={{
            backgroundImage: `linear-gradient(90deg, #aaaaaa ${100 -
              ((index + 1) / questionsLength) * 100}% , #006666 ${0}%)`,
          }}
        ></div>
      </div>
    </Box>
  );
};

export default Question;
