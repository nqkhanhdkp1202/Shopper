import React from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'

const ErrorText = styled.p`
    width: 100% !important;
    padding-left: 180px;
    color: red;
   
`

const Label = styled.label`
    display: flex;
    flex-wrap: wrap;
    input{
        flex: 1
    }
`

function Input({ error, label, required, placeholder, type = 'text', ...props }, ref) {
    return (
        <>
            <div className="form-group">
                {
                    label && <label>
                        {label}
                        {
                            required && <span> *</span>
                        }
                    </label>
                }
                <input className="form-control form-control-sm" type={type} placeholder={placeholder} required />
            </div>
        </>
    )
}


export default forwardRef(Input)
