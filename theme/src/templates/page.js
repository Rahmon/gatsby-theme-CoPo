import React from "react"

const PageTemplate = ({ pageContext }) => (
  <>
    <h1>{pageContext.heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </>
)

export default PageTemplate
