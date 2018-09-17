import React from 'react'
import styled from 'styled-components'

const FieldWrapper = styled.div`
  margin-top: ${props => props.marginTop || '10px'};
  margin-bottom: ${props => props.marginBottom || '10px'};
  margin-right: ${props => props.marginRight || '10px'};
  margin-left: ${props => props.marginLeft || '10px'};
  width: 100%;
`

const Input = styled.input`
  border: none;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
  background: #fff;
  color: #252a34;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  display: block;
  padding: 15px;
  transition: all 0.2s;
  width: 100%;
  -webkit-appearance: none;
`

const Label = styled.label`
  color: #252a34;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  font-weight: 400;
`

const HelperText = styled.span`
  color: #252a34;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 0.7rem;
  padding-left: 3px;
`

const FormField = ({
  name,
  type,
  label,
  placeholder,
  required,
  helperText,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => (
  <FieldWrapper marginBottom={marginBottom} marginLeft={marginLeft} marginRight={marginRight} marginTop={marginTop}>
    {!label ? null : <Label for={name}>{label}</Label>}
    <Input name={name} type={type} placeholder={placeholder} required={required} />
    {!helperText ? null : <HelperText>{helperText}</HelperText>}
  </FieldWrapper>
)

export default FormField