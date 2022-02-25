import React from 'react';
import styled from "styled-components";


const ListOption = () => {
  return (
    <>
    <ListOptionRow>
      <ListOptionType>작성자</ListOptionType>
      <ListOptionList>
        <ListOptionItem>
          <input name="who" type="checkbox" id="hs" value="hs" />
          <label htmlFor="hs">효순</label>
        </ListOptionItem>
        <ListOptionItem>
          <input name="who" type="checkbox" id="jy" value="jy" />
          <label htmlFor="jy">지윤</label>
        </ListOptionItem>
        <ListOptionItem>
          <input name="who" type="checkbox" id="tina" value="tina" />
          <label htmlFor="tina">다님</label>
        </ListOptionItem>
        <ListOptionItem>
          <input name="who" type="checkbox" id="km" value="km" />
          <label htmlFor="km">규민</label>
        </ListOptionItem>
        <ListOptionItem>
          <input name="who" type="checkbox" id="mj" value="mj" />
          <label htmlFor="mj">미진</label>
        </ListOptionItem>
      </ListOptionList>
    </ListOptionRow>
    <ListOptionRow>
      <ListOptionType>카테고리</ListOptionType>
      <ListOptionList>
        <ListOptionItem>
          <input name="subject" type="checkbox" id="html" value="html" />
          <label htmlFor="html">HTML</label>
        </ListOptionItem>
        <ListOptionItem>
          <input name="subject" type="checkbox" id="css" value="css" />
          <label htmlFor="css">CSS</label>
        </ListOptionItem>
      </ListOptionList>
    </ListOptionRow>
    </>
  );
};

export default ListOption;


const ListOptionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 3%;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
`

const ListOptionType = styled.strong`
  width: 5.375rem;
  padding-right: 0.375rem;
  font-size: 1rem;
  letter-spacing: -0.045rem;
  line-height: 1.8rem;
  box-sizing: border-box;
`

const ListOptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 5.375rem);
`

const ListOptionItem = styled.li`
  max-width: 33.3333%;
  padding-right: 1.5rem;
  box-sizing: border-box;
  &:nth-child(3) ~ li {
    margin-top: 1rem;
  }
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
  }
  label {
    position: relative;
    display: inline-block;
    min-height: 1.8rem;
    padding-top: .25rem;
    padding-left: 1.625rem;
    font-size: 1rem;
    line-height: 1.3;
    letter-spacing: -0.045rem;
    word-break: break-all;
    box-sizing: border-box;
    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: .4rem;
      width: 1rem;
      height: 1rem;
      border: 1px solid #ddd;
      border-radius: 0.125rem;
      box-sizing: border-box;
    }
  }
  input:checked + label {
    ::before {
      background-color: #fdb674;
      border-color: #fdb674;
    }
  }
`