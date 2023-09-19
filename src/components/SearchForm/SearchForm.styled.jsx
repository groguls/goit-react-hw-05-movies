import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 30px;
  position: relative;
  top: 0;
  left: 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  line-height: 46px;
  font-size: 1.1em;
  color: rgba(0, 0, 0, 0.5);
  border: 0;
  border-radius: 30px;
  padding: 10px 20px;
  outline: none;
`;

export const SearchButton = styled.button`
  height: 46px;
  padding: 10px 26px;
  border: 0;
  background: linear-gradient(
    to right,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 180, 228, 1) 100%
  );
  border-radius: 30px;
  position: absolute;
  top: 0;
  right: -1px;
  color: #fff;
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 30px;
  margin-bottom: 15px;
  border: 1px solid rgba(13, 37, 63, 1);
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    to right,
    rgba(1, 180, 228, 1) 0%,
    rgba(13, 37, 63, 1) 100%
  );
`;
