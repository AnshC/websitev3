import './styles.css'
import { Scroll } from '../data/scroll'

/* Component Import */
import Navigation from '../components/navigation'

export default function Website() {
    
    Scroll();
    return (
        <div className="Website">
            <div className="head">
                <h1 className="main fancy">Personal Portfolio</h1>
                <p className="description">
                    This page is about this website. It contains all the fonts, colors, credits, and frameworks used for this website.
                </p>
            </div>
            <Navigation />
            <div className="content">
                <div className="bar">
                    <h1 className='fancy'>FONTS FONTS FONTS FONTS FONTS</h1>
                </div>
                <Font
                    fontName="Sake"
                    display="SAKE MORU"
                    author="Kulokale"
                    link="https://kulokale.com/product/sake-moru-font/"
                />
                <Font
                    fontName="Playfair Display"
                    display="PLAYFAIR DISPLAY"
                    author="Google Fonts"
                    link="https://fonts.google.com/specimen/Playfair+Display"
                />
                <div className="bar">
                    <h1 className="fancy">COLORS COLORS COLORS COLORS</h1>
                </div>
                <div className="squares">
                    <div className="square" onClick={(() => {
                        navigator.clipboard.writeText("efefd0");
                    })}>
                        <div className="color" style={{ backgroundColor: 'var(--beige)' }}></div>
                        <p className="label fancy">beige</p>
                        <p className="label_secondary">#efefd0</p>
                    </div>
                    <div className="square">
                        <div className="color" style={{ backgroundColor: 'var(--blue)' }}></div>
                        <p className="label fancy">blue</p>
                        <p className="label_secondary">#1482d6</p>
                    </div>
                    <div className="square">
                        <div className="color" style={{ backgroundColor: 'var(--lapis)' }}></div>
                        <p className="label fancy">lapis</p>
                        <p className="label_secondary">#1a659e</p>
                    </div>
                    <div className="square">
                        <div className="color" style={{ backgroundColor: 'var(--black)', border: '2px solid var(--beige)' }}></div>
                        <p className="label fancy">black</p>
                        <p className="label_secondary">#0F0F05</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function clipboardElement(props) {
    return (
        <div className="clipboardElement">
            <p>Copied {props.color} to Clipboard</p>
        </div>
    )
}

function Font(props) {
    return (
        <div className="font">
            <p
                className="main"
                style={{ fontFamily: props.fontName }}

            >
                {props.display}
            </p>
            <a href={props.link} className="cred link-default">by {props.author}</a>
            <div className="display">
                <h1 style={{ fontFamily: props.fontName }}>The quick brown fox jumps over the lazy dog.</h1>
                <h2><span style={{ fontFamily: props.fontName, color: 'var(--lapis)', backgroundColor: 'var(--beige)' }}>The quick brown fox jumps over the lazy dog.</span></h2>
                <p style={{ fontFamily: props.fontName }}>The quick brown fox jumps over the lazy dog.</p>
            </div>
        </div>
    )
}