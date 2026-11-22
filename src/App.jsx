import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronLeft, ChevronRight, Compass, Gem, Instagram, Menu, Moon, Send, Sparkles, Star, WandSparkles, X } from 'lucide-react'

const img = {
  hero: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2200&q=85',
  books: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=85',
  crystals: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85',
  forest: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85',
  star: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1100&q=85',
  botanical: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1100&q=85',
}

const categories = [
  { id: 'charms', n: '01', title: 'Charms', description: 'Little treasures, big intentions.', Icon: Sparkles, shade: 'dark', detail: 'An assortment of little rituals, lucky talismans, and meaningful objects to keep close to your heart.' },
  { id: 'books', n: '02', title: 'Books', description: 'Stories from another world.', Icon: BookOpen, shade: 'medium', detail: 'Our reading nook of folklore, celestial myths, old legends, and words that feel like spells.' },
  { id: 'spells', n: '03', title: 'Spells', description: 'A touch of everyday magic.', Icon: WandSparkles, shade: 'lilac', detail: 'Simple, symbolic practices for setting intentions, slowing down, and making room for wonder.' },
  { id: 'gems', n: '04', title: 'Gems', description: 'Earth’s hidden wonders.', Icon: Gem, shade: 'light', detail: 'Discover the colors, origins, and fascinating stories of nature’s most beautiful stones.' },
]

const stories = [
  { tag: 'THE GRIMOIRE', date: 'NOV 18, 2026', title: 'The art of finding magic in the ordinary', description: 'Maybe the extraordinary has been hiding in your everyday rituals all along.', image: img.books },
  { tag: 'COSMIC NOTES', date: 'NOV 12, 2026', title: 'A little guide to moonlit intentions', description: 'A quiet moment, an open heart, and the beautiful possibilities of a fresh beginning.', image: img.star },
  { tag: 'NATURE & WONDER', date: 'NOV 04, 2026', title: 'Where the wild things bloom', description: 'Wander through the symbols, stories, and poetry of the natural world.', image: img.botanical },
]

const updates = [
  { date: '22 NOV 2026', title: 'The portal is open', desc: 'Our enchanted little corner of the internet has a brand-new home.' },
  { date: '18 NOV 2026', title: 'Pages from the grimoire', desc: 'A fresh selection of stories, notes, and rituals is waiting for you.' },
  { date: '12 NOV 2026', title: 'The moonlit collection', desc: 'Explore new celestial inspiration and a little everyday wonder.' },
]

function OrnamentalStar({ className = '' }) { return <span aria-hidden="true" className={`ornamental-star ${className}`}>✦</span> }

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  const links = [['The world', '#world'], ['Discover', '#discover'], ['Journal', '#journal'], ['About', '#about']]
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="Purple Magic homepage"><span className="brand-symbol">✳</span><span>PURPLE <em>MAGIC</em></span></a>
    <nav className="desktop-nav" aria-label="Navigazione principale">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav>
    <a className="header-cta" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
    <button className="mobile-menu-trigger" aria-label={open ? 'Chiudi menu' : 'Apri menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav className="mobile-nav" aria-label="Menu mobile">{links.map(([label, href]) => <a onClick={() => setOpen(false)} href={href} key={href}>{label}<ArrowUpRight size={18}/></a>)}<a href="#contact" onClick={() => setOpen(false)}>Get in touch <ArrowUpRight size={18}/></a></nav>}
  </header>
}

function SectionEyebrow({ children, light = false }) { return <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><OrnamentalStar/>{children}</div> }

function App() {
  const [category, setCategory] = useState(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [formError, setFormError] = useState('')
  const [storyIndex, setStoryIndex] = useState(0)
  const goStory = (delta) => setStoryIndex(i => (i + delta + stories.length) % stories.length)
  const handleSubscribe = (e) => { e.preventDefault(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { setFormError('Inserisci un indirizzo email valido.'); return } setFormError(''); setSubscribed(true) }

  return <>
    <Header />
    <main>
      <section className="hero" id="home" style={{'--hero-image': `url("${img.hero}")`}}>
        <div className="hero-noise" />
        <div className="hero-side-label">THE ENCHANTED UNIVERSE <span>•</span> EST. 2026</div>
        <div className="hero-content container-wide">
          <div className="hero-kicker"><span className="kicker-line"/> A LITTLE WONDER GOES A LONG WAY <span className="kicker-line"/></div>
          <h1>Purple<br/><span>Magic</span><OrnamentalStar className="hero-heading-star"/></h1>
          <p className="hero-subtitle">For the dreamers, the wanderers,<br/>and the beautifully curious souls.</p>
          <a className="pill-button" href="#world">Explore the magic <ArrowUpRight size={19}/></a>
        </div>
        <div className="hero-bottom container-wide"><span>01 / THE BEGINNING</span><a href="#world" aria-label="Scorri per scoprire"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={20}/></a><span>✧ &nbsp; FOLLOW YOUR CURIOSITY</span></div>
      </section>

      <section className="intro-section section-pad" id="world">
        <div className="ambient-orb"/>
        <div className="intro-inner container-wide">
          <SectionEyebrow>WELCOME TO OUR WORLD</SectionEyebrow>
          <h2>There's a little bit of <em>magic</em><br/>in everything.</h2>
          <div className="intro-divider"><span/>✳<span/></div>
          <p>A place for curiosities, ancient stories and beautiful little mysteries. Step out of the everyday and into a world where imagination is always welcome.</p>
        </div>
      </section>

      <section className="category-section section-pad" id="discover">
        <div className="container-wide">
          <div className="section-heading-row"><div><SectionEyebrow>CHOOSE YOUR PATH</SectionEyebrow><h2>What calls to <em>you?</em></h2></div><p>Four doors. Endless little wonders.<br/>Where will your curiosity take you?</p></div>
          <div className="category-grid">{categories.map(({id, n, title, description, Icon, shade, detail}) => <button type="button" onClick={() => setCategory({title, detail, Icon})} className={`category-tile category-${shade}`} key={id}>
            <div className="category-top"><span>{n} / 04</span><ArrowUpRight size={19}/></div>
            <Icon className="category-icon" strokeWidth={1.15}/>
            <div className="category-text"><h3>{title}</h3><p>{description}</p></div>
            <span className="category-bottom">DISCOVER MORE <ArrowRight size={15}/></span>
          </button>)}</div>
        </div>
      </section>

      <section className="forest-section" style={{'--forest-image': `url("${img.forest}")`}}>
        <div className="forest-inner container-wide"><div className="forest-symbol">☾</div><SectionEyebrow light>STEP INTO THE UNKNOWN</SectionEyebrow><h2>Not all who wander<br/>are <em>lost.</em></h2><p>Sometimes the most beautiful things are waiting just beyond the familiar.</p><a className="outline-button" href="#journal">Enter the journal <ArrowUpRight size={18}/></a></div>
        <span className="forest-caption">THE WOODS ARE LOVELY, DARK AND DEEP</span>
      </section>

      <section className="journal-section section-pad" id="journal">
        <div className="container-wide"><div className="section-heading-row journal-heading"><div><SectionEyebrow>THE PURPLE JOURNAL</SectionEyebrow><h2>Stories & <em>stardust.</em></h2></div><div className="story-controls"><button type="button" onClick={() => goStory(-1)} aria-label="Articolo precedente"><ChevronLeft size={20}/></button><button type="button" onClick={() => goStory(1)} aria-label="Articolo successivo"><ChevronRight size={20}/></button></div></div>
          <div className="stories-grid">{[0,1,2].map(offset => { const item = stories[(storyIndex + offset) % stories.length]; return <article className="story-card" key={item.title}><div className="story-image" style={{backgroundImage:`url("${item.image}")`}}><span>{item.tag}</span></div><div className="story-meta">{item.date}<span>✦</span> 5 MIN READ</div><h3>{item.title}</h3><p>{item.description}</p><button type="button" onClick={() => setCategory({title:item.title,detail:item.description + ' Full journal stories can be added here when your content is ready.',Icon:BookOpen})} className="text-link">Read the story <ArrowUpRight size={16}/></button></article>})}</div>
        </div>
      </section>

      <section className="updates-section" id="about"><div className="updates-inner container-wide"><div className="updates-left"><SectionEyebrow light>WHAT'S NEW</SectionEyebrow><h2>Whispers from<br/>the <em>other side.</em></h2><p>Little announcements, discoveries and notes from our enchanted corner.</p><div className="moon-mark">☽ <span>✧</span></div></div><div className="updates-list">{updates.map((update, i) => <div className="update" key={update.title}><div className="update-date">{update.date}</div><div><span className="update-index">0{i+1} / LATEST NOTES</span><h3>{update.title}</h3><p>{update.desc}</p></div><Star size={18} strokeWidth={1.2}/></div>)}</div></div></section>

      <section className="newsletter-section" id="contact"><div className="newsletter-glow"/><div className="newsletter-inner container-wide"><div className="newsletter-star">✳</div><SectionEyebrow>LET'S STAY CONNECTED</SectionEyebrow><h2>A little magic in<br/><em>your inbox.</em></h2><p>Sign up to join the circle. Occasional stories, thoughtful finds and a sprinkle of wonder.</p><form onSubmit={handleSubscribe} className="newsletter-form" noValidate><label className="sr-only" htmlFor="newsletter-email">Indirizzo email</label><input id="newsletter-email" type="email" placeholder="Your email address" value={email} onChange={(e) => {setEmail(e.target.value);setFormError('')}} disabled={subscribed} /><button type="submit" disabled={subscribed}>{subscribed ? <Check size={18}/> : <ArrowUpRight size={19}/>}<span className="sr-only">{subscribed ? 'Iscritto' : 'Iscriviti'}</span></button></form>{formError && <p className="form-note error-note" role="alert">{formError}</p>}{subscribed ? <p className="form-note" role="status">Grazie! Questo è un modulo dimostrativo: collega un servizio newsletter per salvare l'iscrizione.</p> : <p className="form-note">A little note: this is a design demo. Connect your newsletter provider to collect sign-ups.</p>}</div></section>
    </main>
    <footer className="footer"><div className="container-wide footer-main"><div><a href="#home" className="footer-brand">PURPLE <em>MAGIC</em><OrnamentalStar/></a><p>Made for the beautifully curious.</p></div><div className="footer-links"><a href="#world">Our world</a><a href="#discover">Discover</a><a href="#journal">Journal</a><a href="#contact">Contact</a></div><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={16}/></a></div><div className="container-wide footer-bottom"><span>© {new Date().getFullYear()} PURPLE MAGIC. ALL RIGHTS RESERVED.</span><span>DESIGNED WITH ✧ AND A LITTLE MAGIC</span></div></footer>
    {category && <div className="modal-backdrop" onClick={() => setCategory(null)} role="presentation"><div className="magic-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setCategory(null)} aria-label="Chiudi"><X size={20}/></button><category.Icon size={43} strokeWidth={1.15}/><SectionEyebrow>THE MAGIC WITHIN</SectionEyebrow><h2 id="modal-title">{category.title}</h2><p>{category.detail}</p><button className="modal-dismiss" onClick={() => setCategory(null)}>Continue exploring <ArrowRight size={17}/></button></div></div>}
  </>
}

export default App
