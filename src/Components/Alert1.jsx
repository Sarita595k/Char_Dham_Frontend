import styles from 'styled-components'

const Div = styles.div`
background-color:#FDF5E6;
padding:1rem`

const H1 = styles.h1`
font-size:1.5rem;
color:#4A2C2A;
`
const Span = styles.span`
color:#CC3366`
export const Alert1 = () => {
    return (
        <Div>
            <H1>Char Dham Temples are closed for winter
                | Registration mandatory
                | Limited season (May–Oct) |
                Stay tuned for the
                <Span> 2026 opening updates</Span>  </H1>
        </Div>
    )
}