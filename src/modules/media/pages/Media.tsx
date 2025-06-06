import React from 'react'
import ThemeToggle from '../../../shared/components/ThemeToggle'
import BasicInfoLayout from '../layouts/BasicInfo/layout.basicinfo'
import TagsLayout from '../layouts/Tags/layout.tags'


const Media = () => {
  return (
    <div>Media
      <h1>My App</h1>
  <ThemeToggle />

  <BasicInfoLayout />
  <TagsLayout />
    </div>
  )
}

export default Media