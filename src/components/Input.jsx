import React, { useId } from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'

const ErrorText = styled.p`
    width: 100% !important;
    color: red;
   padding-top: 12px;
`

function Input({ error, label, type = 'text', ...props }, ref) {
    const id = useId()

    return (
        <>
            <div className="form-group">
                {
                    label && <label htmlFor={id}>
                        {label}
                        {
                            required && <span> *</span>
                        }
                    </label>
                }
                <input {...props} className="form-control form-control-sm" id={id} type={type} />
                {
                    error && <ErrorText>{error}</ErrorText>
                }
            </div>
        </>
    )
}

export default forwardRef(Input)
