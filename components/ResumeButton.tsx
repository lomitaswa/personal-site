'use client'

import { RoughNotation } from 'react-rough-notation'

export default function ResumeButton() {
  return (
    <a
      href="/static/lomitaswa.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block text-base font-semibold"
      style={{ zIndex: 1, color: '#f2b75c' }}
    >
      <RoughNotation
        type="box"
        show={true}
        color="#bae6fd"
        strokeWidth={3}
        padding={[6, 16]}
        animationDuration={1200}
      >
        Resume
      </RoughNotation>
    </a>
  )
}
