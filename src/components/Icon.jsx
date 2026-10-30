const paths = {
  resume: 'M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6',
  mic: 'M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM5 11a7 7 0 0 0 14 0M12 18v3',
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M9 7h6',
  briefcase: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16',
  chat: 'M4 5h16v11H9l-5 4z',
  cert: 'M5 4h14v10H5zM9 14l-1 6 4-2 4 2-1-6M8 8h8',
  check: 'M5 12l5 5 9-10',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'M6 6l12 12M18 6L6 18',
  shield: 'M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.500-8-9V6zM9 12l2 2 4-4',
  trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6',
  doc: 'M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7',
  chevron: 'M6 9l6 6 6-6',
}

export default function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
