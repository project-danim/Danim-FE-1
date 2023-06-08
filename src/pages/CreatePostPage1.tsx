import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  AgeRange,
  Gender,
  Keywords,
  Location,
  RecruitmentDatePicker,
  TripDatePicker,
  RecruitmentCouter,
} from "../components/CreatePostPage1";
import postIsEditingState from "../recoil/post/postIsEditingState";
import * as Styled from "./CreatePostPage1Styles";

function CreatePostPage1() {
  // 컴포넌트가 랜더링 될때 수정 중이 아니도록 하기 위해, postIsEditing 속성을 false로
  const [postIsEditing, setPostIsEditing] = useRecoilState(postIsEditingState);
  useEffect(() => {
    setPostIsEditing(false);
  }, [setPostIsEditing]);

  return (
    <div>
      <p>
        <Styled.CircleNumbering>1</Styled.CircleNumbering>
        <Styled.MainInfoContext>
          메인 페이지에 노출 될 기본 정보를 알려주세요.
        </Styled.MainInfoContext>
      </p>

      <p>다님의 목적을 알려주세요.</p>
      <Keywords />
      <p>어디서 함께하시나요?</p>
      <Location />
      <TripDatePicker />
      <p>어떤 사람들과 함께 하시고 싶나요?</p>
      <p>* 중복선택 가능</p>
      <Gender />
      <AgeRange />
      <p>키워드로 글을 작성하면 같이 다닐 확률이 높아져요!</p>
      <RecruitmentDatePicker />
      <p>모집 인원을 알려주세요</p>
      <RecruitmentCouter />
      <Styled.StyledLink to="/create-post/step2">다음</Styled.StyledLink>
    </div>
  );
}

export default CreatePostPage1;
