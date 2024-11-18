import React from 'react'

function TextareaVariants({label, placeholder, className}) {
  return (
    <div>
        <Textarea variant="standard" label={label} placeholder={placeholder} className={className} />
    </div>
  )
}

export default TextareaVariants